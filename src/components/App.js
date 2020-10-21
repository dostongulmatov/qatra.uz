import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SignUp from "./SignUp.js"
import SignInApp from "./SignIn.js"
import Home from "./Home.js"
import Header from "./Header.js"
import Nav1 from "./Nav.js"
import Footer from "./Footer.js"
import About from "./About.js"
import moreInfo from './moreInfo.js'
import PaymentPage from './PaymentPage.js'
import NeedHelp from './NeedHelp.js'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Nav1 />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/SignIn' component={SignInApp} />
          <Route path='/SignUp' component={SignUp} />
          <Route path='/moreInfo' component={moreInfo} />
          <Route path='/PaymentPage' component={PaymentPage} />
          <Route path='/NeedHelp' component={NeedHelp} />
        </Switch>
        <Footer />
      </div>    
    </Router>
  )
}

export default App
