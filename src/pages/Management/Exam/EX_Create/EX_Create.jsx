import { useMutation } from '@tanstack/react-query';
import React from 'react'

export default function EX_Create() {
  const postData = async (data) => {
    const response = await fetch('http://192.168.30.215:3000/exam/add', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }
  const {mutate, isLoading, isError} = useMutation(postData, {
    onSuccess: (successData)=> {
      console.log(successData);
    },

  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const status = form.status.value;
    const data = { name: name, status: status }
    // postData(data);
    mutate({ name: name, status: status });
  }
  
  if ( isLoading ) {
    return ( 
      <p>Loading ..... </p>
     );
  }
  if ( isError ) {
    return ( 
      <p>Error ..... </p>
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
        <input type='submit' value='Add' className='form-control btn btn-success' />
      </form>
    </div>
  )
}
