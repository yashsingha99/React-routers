import React from 'react'
import {Link} from 'react-router-dom';
import './login.css'
function Login() {
    const call = () =>{
        alert("you arn't regestered yet")
    }
  return (
   <div className="loginPage">
    <div className="loginBox">
        <h2>Log In</h2>
        <div className="userId">
            <label htmlFor="id">User Id</label>
            <input type="text" id='id'/>
        </div>
        <div className="userPassword">
            <label htmlFor="password">password</label>
            <input type="text" id='password'/>
        </div>
            <button onClick={call}>submit</button>
        <div className="sign">
            <Link className='signUp' to="/signup">
                Sign up
            </Link>
        </div>
    </div>
   </div>
  )
}

export default Login