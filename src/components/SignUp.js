import React from 'react'
import axios from 'axios'
import { Form, withFormik, Field } from "formik"
import * as Yup from 'yup';

// export default class UserList extends React.Component {
//   state = {
//     persons: [],
//   };

//   componentDidMount() {
//     axios.get('https://jsonplaceholder.typcode.com/users').then(res => {
//       console.log(res);
//       this.setState({ persons: res.data })
//     });
//   }

//   render() {
//     return (
//       <ul>
//         { this.state.persons.map(person => <li>{person.name}</li>)}
//       </ul>
//     )
//   }
// }

const SignUp = (
  {
    values,
    errors,
    touched
  }) =>
      (<div className="form" >
        <Form>
          <div className="row">
            <a href='/SignUp' className="register-btn col-lg-6  btn btn-outline-light active">Register</a>
            <a href='/SignIn' className="login-btn col-lg-6 btn btn-outline-light" >Login</a>
          </div><br/><br/>
          <div>
            { touched.email && errors.email && <p>{ errors.email }</p> }
            <Field className="form-info" name="email" type="email" placeholder="Email"  /><br /><br />
          </div>
          <div>
            { touched.password && errors.password && <p>{ errors.password }</p> }
            <Field className="form-info" name="password" id="password" type="password" placeholder="Password" /><br /><br />
            <input className="form-info" type="password" placeholder="Confirm Password" /><br /><br />
          </div>
          <button className="submit-btn" type="submit">Submit</button>
        </Form>
      </div>)
      const SignUpApp = withFormik({
        mapPropsToValues(free, email, password) {
          return {
            email: email || '',
            password: password || ''
          }
        },
        validationSchema: Yup.object().shape({
          email: Yup.string().email('Email not valid').required('Email is Required'),
          password: Yup.string().min(5, "password must be 9 character or longer").required('Password is Required')
        }),
        handleSubmit(values) {
        axios.get('http://localhost:4000/api/user').then(res => {
          console.log(res);
        });
        }
      })(SignUp)

export default SignUpApp

