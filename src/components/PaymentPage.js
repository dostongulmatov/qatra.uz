import React from 'react'
import CreditCardInput from 'react-credit-card-input';



const PaymentPage = () => {
  return (
    <div>
      <h1>Make Payment here</h1>
      <label>Card Number:</label>
      <input name="credit-number" class="cardnumber" type="tel" pattern="\d*" maxlength="19" placeholder="Card Number" /><br />
      <label>Expiry date:</label>
      <input name="credit-expires" class="cc-expires" type="tel" pattern="\d*" maxlength="7" placeholder="MM / YY" /><br />
      <label>How much money do you want to donate:</label>
      <input placeholder="0 soum" /><br />
      <input type="submit" class="form-submit" value="Pay Now" />

    </div>
  )
}

export default PaymentPage
