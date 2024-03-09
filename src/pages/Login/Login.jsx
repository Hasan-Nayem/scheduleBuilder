import React, { useContext } from 'react'
import './Login.css'
import { AuthContext } from './../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
export default function Login() {
  const {signInWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithGoogle(email, password)
    .then(response => {
      console.log("User logged in - ", response.user);
      navigate(from, {replace : true});
    })
}
  return (
    <div>
      <div className='container my-5 shadow p-4'>
        <h1 className='text-center fw-bolder my-3'>Login Form</h1>
        <form onSubmit={handleSubmit} className='form-control'>
          <input type='text' name='email' className='form-control my-3' placeholder='Your email' />
          <input type='password' name='password' className='form-control my-3' placeholder='Your Password' />
          <input type='submit' className='form-control btn btn-success' />
        </form>
      </div>
    </div>
  )
}
