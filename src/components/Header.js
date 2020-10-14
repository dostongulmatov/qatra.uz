import React from 'react'
import QuoteCarousel from './QuoteCarousel.js'

const header = () => {
  return (
    <div className="header">
      <div className="row">
        <div className="col-lg-6">
          <h1 className="brand-name">Qatra.uz</h1>
        </div>
        <div className="col-lg-6">
          <QuoteCarousel />
        </div>
      </div>
    </div>
  )
}

export default header
