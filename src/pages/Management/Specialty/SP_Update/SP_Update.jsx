import { useState } from "react"
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SP_Update() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const data = useLoaderData();
  // console.log(data);
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const sp_name = form.sp_name.value;
    const sp_code = form.sp_code.value;
    const status = form.status.value;
    const data = {sp_name : sp_name, sp_code: sp_code, status : status};
    fetch(`http://127.0.0.1:8000/api/updateSpecialty/${id}`, {
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify(data)
    })
    .then(response => response.json()
    .then((result) => {
      if (result) {
        toast.success(result.message);
        navigate('/manage/sp-manage/manage');
        setLoading(false);
      }else {
        setLoading(false);
        toast.error(result.message);
      }
    })
    );
  }
  return (
    <div className='container'>
    <h1 className='text-center'>Update Specialty</h1>
      <form className="form-control" onSubmit={handleSubmit}>
          <input type="hidden" name="id" id="id" className='form-control' defaultValue={data.data.id} />
        <div className="form-group my-2">
          <label htmlFor="sp_name">Specialty Name</label>
          <input type="text" name="sp_name" id="sp_name" className='form-control' defaultValue={data.data.sp_name} />
        </div>
        <div className="form-group my-2">
          <label htmlFor="sp_code">Specialty Code</label>
          <input type="text" name="sp_code" id="sp_code" className='form-control' defaultValue={data.data.sp_code} />
        </div>
        <div className="form-group my-2">
          <label htmlFor="status">status</label>
          <select name="status" id="status" className='form-control'>
            <option value="1">Active</option>
            <option value="0">Inactive</option>
          </select>
        </div>
        <div className="form-group my-1">
        {
          loading? 
          <div className="d-flex justify-content-center my-1">
            <div className="spinner-border text-success " role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div> : 
          <button type='submit' className='form-control btn btn-success'>Update</button>
        }
        </div>
      </form>
    </div>
  )
}
