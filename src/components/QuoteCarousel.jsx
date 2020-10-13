import React from 'react'

const QuoteCarousel = () => {
  return (
    <div className="quote-carousel">
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
      </div>
      
      </div>
    </div>)}

export default QuoteCarousel
