import React from 'react'
import { Form, withFormik, Field } from "formik"
import * as Yup from 'yup';

const SignIn = (
  {
    errors,
    touched
  }) =>
      (<div className="form" >
        <Form>
          <div className="row">
            <a  className="register-btn col-lg-6  btn btn-outline-light" href="/SignUp">Register</a>
            <a href="/SignIn" className="login-btn col-lg-6 btn btn-outline-light active">Login</a>
          </div><br/><br/>
          <div>
            { touched.email && errors.email && <p>{ errors.email }</p> }
            <Field className="form-info" name="email" type="email" placeholder="Email"  /><br /><br />
          </div>
          <div>
            { touched.password && errors.password && <p>{ errors.password }</p> }
            <Field className="form-info" name="password" id="password" type="password" placeholder="Password" /><br /><br />
          </div>
          <button className="submit-btn" type="submit">Submit</button>
        </Form>
      </div>)
      const SignInApp = withFormik({
        mapPropsToValues(free, email, password) {
          return {
            email: email || '',
            password: password || ''
          }
        },
        validationSchema: Yup.object().shape({
          email: Yup.string().email('Email not valid').required('Email is Required'),
          password: Yup.string().min(9, "password must be 9 character or longer").required('Password is Required')
        }),
        handleSubmit(values) {
          console.log(values)
        }
      })(SignIn)

export default SignInApp