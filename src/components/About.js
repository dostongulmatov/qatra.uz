import React from 'react'
import help from './images/help.png'
import guide from './images/guide.png'
import question from './images/question.png'
import advice from './images/advice.png'


const About = () => {
  return (
    <div className="about-page">

      <div className="row h-100">
        <div className="col-lg-6  my-auto">
          <p className="what-we-do">What we do?</p>
          <h1 className="what-we-do">We are small non-profit organisation. We want to help rich people to invest their money for the hereafter.
          You can use our website or app for making donation at any time at any position to person who really deserve it.</h1>
        </div>
        <div className="col-lg-6">
          <img src={ help }/>
        </div>
      </div>

      <div className="row h-100">
        <div className="col-lg-6">
          <img src={ guide }/>
        </div>
        <div className="col-lg-6 my-auto">
          <p className="what-we-do">How can you help us?</p>
          <h1 className="what-we-do">If you are familiar with any person who need help just contact us and fill the form by clicking this button.
          <button className="btn btn-outline-danger btn-lg ml-2">Need Help</button></h1>
        </div>
      </div>

      <div className="row h-100">
        <div className="col-lg-6 my-auto">
          <p className="what-we-do">How it works?</p>
          <h1 className="what-we-do">It is easy. If you have spare money you should just press donate button.
          if you need help just press need help button. </h1>
        </div>
        <div className="col-lg-6">
          <img src={ question }/>
        </div>
      </div>

      <div className="row h-100">
        <div className="col-lg-6">
          <img src={ advice }/>
        </div>
        <div className="col-lg-6 my-auto">
          <p className="what-we-do">Why I need to use Qatra.uz</p>
          <h1 className="what-we-do">There are lots of reasons of using Qatra. The most important is you can make donation whenever you
          want you will not have to go anywhere for finding need people just sit at home an invest for your future. </h1>
        </div>
      </div>
      <div className="row h-100">
        <div className="col-6 my-auto">
          <h1>What is your opinion about our Project and if you want to become partner with us <button className="btn btn-outline-primary">
          Press this button</button></h1>
        </div>
        <div className="col-6">
          <textarea className="about-page-textarea" rows="7" placeholder="Enter your thoughts and improvements can be added"></textarea>
          <button className="about-page-btn btn btn-outline-primary">Send your opinions</button>
        </div>
      </div>
    </div>
  )
}

export default About

      {/* <div className="" >
        <div className="about-containers row">
          <div className="col-6"> */}
                    {/* </div>
          <div className="col-6"> */}
                    {/* </div>
        </div>
        <div className="about-containers right-about-containers">
          <div> */}
                  {/* </div>
          <div> */}
                    {/* </div>
        </div>
      <div className="row" >
      <div>

      </div>
      <div>

      </div> */}
      {/* <div className="about-containers"> */}
              {/* </div>
        <div className="about-containers right-about-containers">
          <div> */}
                    {/* </div>
          <div> */}
                    {/* </div>
        </div>
      </div> */}