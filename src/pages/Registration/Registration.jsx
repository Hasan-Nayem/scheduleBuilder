import React, { useContext } from 'react'
import './Registration.css';
import { AuthContext } from './../../providers/AuthProvider';
export default function Registration() {
  const {signUpWithGoogle} = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        signUpWithGoogle(email, password)
        .then(response => {
          const loggedUser = response.user;
          console.log("User logged in - ", response.user);
          const userData = {name, email, password, role: 1, firebaseUserId : response.user.uid};
          // console.log(userData);
          fetch('http://localhost:3000/user/add', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(userData),
          })
        })
    }
  return (
    <div className='container my-5 shadow p-4'>
    <h1 className='text-center fw-bolder my-3'>Register Form</h1>
        <form onSubmit={handleSubmit} className='form-control'>
            <input type='text' name='name' className='form-control my-3' placeholder='Your name'/>
            <input type='text' name='email' className='form-control my-3' placeholder='Your email'/>
            <input type='password' name='password' className='form-control my-3' placeholder='Your Password'/>
            <input type='submit' className='form-control btn btn-success' placeholder='Your Password'/>
        </form>
    </div>
  )
}
