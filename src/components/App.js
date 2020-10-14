import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import SignUp from "./SignUp.js"
import SignIn from "./SignIn.js"
import Home from "./Home.js"
import Header from "./Header.js"
import Nav1 from "./Nav.js"
import Footer from "./Footer.js"

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Nav1 />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/SignIn' component={SignIn} />
          <Route path='/SignUp' component={SignUp} />
        </Switch>
        <Footer />
      </div>    
    </Router>
  )
}

export default App
