import React from 'react'

const QuoteCarousel = () => {
  return (
    <div className="quote-carousel row">
      <div id="demo" class="carousel slide" data-ride="carousel">

      {/* <!-- The slideshow --> */}
      <div class="carousel-inner">
        <div class="carousel-item active">
          <p className="d-block w-10"> “Give, even when you know you can get nothing back.” Yasmin Mogahed</p>
        </div>
        <div class="carousel-item">
          <p className="d-block w-10"> “The best charity is that given by one who has little.” Prophet Muhammad (S.A.W)</p>
        </div>
        <div class="carousel-item">
          <p className="d-block w-10">“A man’s true wealth is the good he does in this world.” Prophet Muhammad (S.A.W)</p>
        </div>
        <div className="row">
          <p className="need-help-prg col-lg-8 pt-2">Do you really need help from people? If yes.</p>
          <a className="need-help-btn col-lg-3 btn btn-outline-danger" href="NeedHelp">Click this button</a>
        </div>
      </div>
      
      </div>
    </div>)}

export default QuoteCarousel
