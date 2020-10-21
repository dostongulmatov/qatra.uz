import React from 'react'
// import CallIcon from '@material-ui/icons/Call';
import footerImg from './images/footerImg.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="row my-auto">
        <ul className="col-lg-2">
          <li><h5>Qatra 💰</h5></li>
          <li><a href="/" className="footer-btn btn btn-outline-primary mb-2 w-100">Home</a></li>
          <li><a href="/NeedHelp" className="footer-btn btn btn-outline-primary mb-2 w-100">Need Help</a></li>
          <li><a href="/SignIn" className="footer-btn btn btn-outline-primary mb-2 w-100">Sign In</a></li>
          <li><a href="/SignUp" className="footer-btn btn btn-outline-primary mb-2 w-100">Sign Up</a></li>
        </ul>

        <ul className="col-lg-2">
          <li><h5>Donate to &#10549;</h5></li>
          <li><a href="/" className="footer-btn btn btn-outline-primary mb-2 w-100">Masjids</a></li>
          <li><a href="/" className="footer-btn btn btn-outline-primary mb-2 w-100">Poor People</a></li>
          <li><a href="/" className="footer-btn btn btn-outline-primary mb-2 w-100">Disabled People</a></li>
          <li><a href="/" className="footer-btn btn btn-outline-primary mb-2 w-100">Students</a></li>
        </ul>

        <ul className="col-lg-3">
          <li>
            <h5>About us ℹ️</h5>
          </li>
          <li>
            <p className="about-us-p pl-2 pr-2 w-100">Qatra.uz is small organisation. We want to help rich people to invest their money for the hereafter. 
            You can use our website for making donation at any time at any position to person who really deserve it.</p>
          </li>
        </ul>


        <ul className="col-lg-2">
          <li>
            <h5>Contact us &#128222;</h5>
          </li>
          <li>
            <a className="btn mb-2 btn-outline-primary w-100">
            {/* <CallIcon>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </CallIcon> */}
            +998993918565</a>
          </li>
          <li>
            <a className="btn mb-2 btn-outline-primary w-100">
            {/* <CallIcon>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </CallIcon> */}
            +998996368565</a>
          </li>
          <li>
            <a className="btn mb-2 btn-outline-primary w-100">Telegram</a>
          </li>
          <li>
            <a className="btn mb-2 btn-outline-primary w-100">Email</a>
          </li>
        </ul>

        <div className="col-lg-3">
          <img className="w-80" src={ footerImg } alt="..." height="200px" />
        </div>


      </div>
      <p className="copyright">Copyright 2020 Qatra.uz. All right reserved.</p>
    </div>
  )
}

export default Footer
