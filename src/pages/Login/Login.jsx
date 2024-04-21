import { useContext } from "react";
import "./Login.css";
import { AuthContext } from "./../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Login() {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithGoogle(email, password).then((response) => {
      toast.error("sogon");
      console.log("User logged in - ", response.user);
      navigate(from, { replace: true });
    })
    .catch((error) => {
      toast.error(error);
    });
  };
  return (
    // <div>
    //   <div className='container my-5 shadow p-4'>
    //     <h1 className='text-center fw-bolder my-3'>Login Form</h1>
    //     <form onSubmit={handleSubmit} className='form-control'>
    //       <input type='text' name='email' className='form-control my-3' placeholder='Your email' />
    //       <input type='password' name='password' className='form-control my-3' placeholder='Your Password' />
    //       <input type='submit' className='form-control btn btn-success' />
    //     </form>
    //   </div>
    // </div>
    <>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form onSubmit={handleSubmit} className="login100-form validate-form p-l-55 p-r-55 p-t-178">
              <span className="login100-form-title">Admin Sign In</span>
              <div
                className="wrap-input100 validate-input m-b-16"
                data-validate="Please enter email"
              >
                <input
                  className="input100"
                  type='text' 
                  name='email'
                  placeholder="Email"
                  required
                />
                <span className="focus-input100" />
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Please enter password"
              >
                <input
                  className="input100"
                  type="password"
                  name='password'
                  placeholder="Password"
                  required
                />
                <span className="focus-input100" />
              </div>
              {/* <div className="text-right p-t-13 p-b-23">
                <span className="txt1">Forgot</span>
                <a href="#" className="txt2">
                  Username / Password?
                </a>
              </div> */}
              <div className="container-login100-form-btn p-t-13 p-b-23">
                <button className="login100-form-btn">Sign in</button>
              </div>
              {/* <div className="flex-col-c p-t-170 p-b-40">
                <span className="txt1 p-b-9">Don’t have an account?</span>
                <a href="#" className="txt3">
                  Sign up now
                </a>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
    
  );
}
