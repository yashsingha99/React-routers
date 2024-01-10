import React from 'react'
import './signup.css'
import {Link} from 'react-router-dom'
function SignUp() {
  const call = () =>{
    alert("Something went wrong")
}
return (
<div className="loginPage">
<div className="signUpBox">
    <h2>Sign Up</h2>
    <div className="name">
        <label htmlFor="name">Name</label>
        <input type="text" id='name'/>
    </div>
    <div className="email">
        <label htmlFor="email">Email</label>
        <input type="email" id='email'/>
    </div>
    <div className="ph">
        <label htmlFor="ph">Ph. no.</label>
        <input type="number" id='ph'/>
    </div>
    <div className="userPassword">
        <label htmlFor="password">password</label>
        <input type="text" id='password'/>
    </div>
    <div className="rePassword">
        <label htmlFor="Conpassword">Confirm password</label>
        <input type="text" id='Conpassword'/>
    </div>
        <button onClick={call}>submit</button>
    <div className="sign">
        <Link className='signUp' to="/login">
            log in
        </Link>
    </div>
</div>
</div>
)
}

export default SignUp