import React from 'react'
import share from './images/share.png'
const QuoteCarousel = () => {
  return (
    <div className="quote-carousel">
      <div className="row">
        <div className="col-lg-3  col-sm-3">
          <img src={share} alt="..." width="64px"/>
        </div>     
        
        <div id="demo" className="carousel slide col-lg-8 col-sm-8" data-ride="carousel">
        {/* <!-- The slideshow --> */}
          <div className="carousel-inner mt-3">
            <div className="carousel-item active">
              <p className="d-block"> “Give, even when you know you can get nothing back.” Yasmin Mogahed</p>
            </div>
            <div className="carousel-item">
              <p className="d-block"> “The best charity is that given by one who has little.” Prophet Muhammad (S.A.W)</p>
            </div>
            <div className="carousel-item">
              <p className="d-block">“A man’s true wealth is the good he does in this world.” Prophet Muhammad (S.A.W)</p>
            </div>
          </div>
        </div>
      </div>
    </div>)}

export default QuoteCarousel
