import React from 'react'

const SignUp = () => {
  return (
    <div className="form">
      <div className="container-for-img">
      </div>
      <form>
        <div className="row">
          <a  className="register-btn col-lg-6  btn btn-outline-light" href="/SignUp">Register</a>
          <a className="login-btn col-lg-6 btn btn-outline-light active">Login</a>
        </div><br/><br/>
        <input className="form-info" type="email" placeholder="Email"/><br /><br />
        <input className="form-info" type="password" placeholder="Password" /><br /><br />
        <button className="submit-btn" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUp
