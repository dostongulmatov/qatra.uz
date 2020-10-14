import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">

        <ul className="col-lg-2">
          <li><h5>QATRA</h5></li>
          <li><a className="btn">Bosh sahifa</a></li>
          <li><a className="btn">Kategoriyalar</a></li>
          <li><a className="btn">Sign In</a></li>
          <li><a className="btn">Sign Up</a></li>
        </ul>
        <ul className="col-lg-2">
          <li><h5>Media</h5></li>
          <li><a className="btn">Telegram</a></li>
          <li><a className="btn">Instagram</a></li>
          <li><a className="btn">Facebook</a></li>
          <li><a className="btn">Email</a></li>
        </ul>
      </div>
      <p className="copyright">Copyright 2020 Qatra.uz. All right reserved.</p>
    </div>
  )
}

export default Footer
