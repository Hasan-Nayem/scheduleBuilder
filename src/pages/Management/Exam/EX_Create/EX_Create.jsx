import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function EX_Create() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const status = form.status.value;
    const data = { name: name, status: status }
    fetch(`http://127.0.0.1:8000/api/addExam`, {
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
        navigate('/manage/ex-manage/manage');
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
      <h4 className='fw-bolder roboto-medium text-left'>Create New Exam</h4>
      <form className='form-control' onSubmit={handleSubmit}>
        <div className='form-group my-2'>
          <label htmlFor='name'>Exam Name</label>
          <input type='text' name='name' className='form-control' placeholder='Exam name' />
        </div>
        <div className='form-group my-2'>
          <label htmlFor='status'>Status</label>
          <select className='form-control' name='status'>
            <option value='1'>Active</option>
            <option value='0'>Inactive</option>
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
