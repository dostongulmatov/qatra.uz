import React from 'react'

const NeedHelp = () => {
  return (
    <div>
      <h5 className="need-help-heading">Do you really need help? If yes. Just fill the blanks below and get help you need from kind people.</h5>
      <div  className="need-help-form">
        <form>
          <label>Type your name:</label><input className="need-help-input"  name="name" placeholder="Enter your name"/><br />
          <label>Type your address:</label><input className="need-help-input"  name="address" placeholder="Enter your full address"/><br />
          <label>Enter your phone number:</label><input className="need-help-input"  placeholder="Type your number"/><br />
          <label>Enter an Avatar image</label><input type="file" /><br />
          <label>Do you have card?</label>
            <input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
            <label for="exampleRadios1">Yes</label>
            <input type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
            <label for="exampleRadios2">No</label><br />
          <label>Enter an Avatar image</label><input type="file" /><br />
          <label>What kind of person are you?</label>
          <select  className="need-help-input" id="character" name="character">
            <option value="student">Student</option>
            <option value="poor">Poor Person</option>
            <option value="disable">Disable or Seek</option>
            <option value="fund">head of fund</option>
            <option value="fund">Masjid departure</option>
            <option value="fund">Other</option>
          </select><br />
          <label>What do you really need or how much money do you need?<br /> Write all things you need but be honest!</label>
          <textarea placeholder="Enter your needs"/><br />
          <label>Why do you need money?(Please write all reasons of your need for help)</label><br />
          <textarea placeholder="Enter reasons which are making you need for money?" className="need-help-reason" rows="8"/>
          <br />
          <button className="need-help-btn btn btn-outline-light">submit</button>
        </form>
      </div>
    </div>
  )
}

export default NeedHelp
