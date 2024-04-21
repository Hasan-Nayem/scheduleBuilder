import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SP_Create() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const sp_name = form.sp_name.value;
    const sp_code = form.sp_code.value;
    const status = form.status.value;
    const data = {sp_name : sp_name, sp_code: sp_code, status : status};
    fetch(`http://127.0.0.1:8000/api/addSpecialty`, {
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
    <h1 className='text-center'>Add Specialty</h1>
      <form className="form-control" onSubmit={handleSubmit}>
        <div className="form-group my-2">
          <label htmlFor="sp_name">Specialty Name</label>
          <input type="text" name="sp_name" id="sp_name" className='form-control' />
        </div>
        <div className="form-group my-2">
          <label htmlFor="sp_code">Specialty Code</label>
          <input type="text" name="sp_code" id="sp_code" className='form-control' />
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
          <button type='submit' className='form-control btn btn-success'>Add</button>
        }
        </div>
      </form>
    </div>
  )
}
