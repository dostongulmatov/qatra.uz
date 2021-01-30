import React from 'react'
import QuoteCarousel from './QuoteCarousel.js'

const header = () => {
  return (
    <div className="header">
      <div className="row h-100">

        <div className="col-lg-3">
          <h1 className="brand-name">Qatra.uz</h1>
        </div>

        <div className="col-lg-5">
          <QuoteCarousel />
        </div>

        <div className=" col-lg-4 row">
          <p className="need-help-prg col-lg-12 text-center">Do you really need help from people? <br />If yes.</p>
          <a className="need-help-btn col-lg-6 col-sm-6 btn btn-outline-danger mx-auto" href="/NeedHelpApp">Click this button</a>
        </div>

      </div>
    </div>
  )
}

export default header
