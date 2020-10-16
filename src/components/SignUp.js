import React from 'react'
import SignIn from './SignIn'


const SignUp = () => {
  return (
    <div className="form">
      <div className="container-for-img">
      </div>

      <form>
        <div className="row">
          <a to={'/SignUp'} className="register-btn col-lg-6  btn btn-outline-light active">Register</a>
          <a to={'/SignIn'} className="login-btn col-lg-6 btn btn-outline-light" href="/SignIn">Login</a>
        </div><br/><br/>

        <input className="form-info" type="email" placeholder="Email"/><br /><br />
        <input className="form-info" type="password" placeholder="Password" /><br /><br />
        <input className="form-info" type="password" placeholder="Confirm Password" /><br /><br />
        <button className="submit-btn" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUp
