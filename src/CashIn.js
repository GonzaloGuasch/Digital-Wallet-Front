import React from 'react';
import './CashIn.css'
import 'pretty-checkbox/dist/pretty-checkbox.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard} from '@fortawesome/free-solid-svg-icons'


export default class CashIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: '',
      payment: '',
      cardNumber: '',
      fullName: '',
      securityCode: '',
      endDate: '',
    }
    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.handlePaymentChange = this.handlePaymentChange.bind(this)
    this.handleCardNumberChange = this.handleCardNumberChange.bind(this)
    this.handleFullNameChange = this.handleFullNameChange.bind(this)
    this.handleSecurityCodeChange = this.handleSecurityCodeChange.bind(this)
    this.handleEndDateChange = this.handleEndDateChange.bind(this)
  }
  handleAmountChange(event) {
    this.setState({amount: event.target.value})
  }
  handlePaymentChange(event) {
    this.setState({payment: event.target.value})
  }
  handleCardNumberChange(event) {
    this.setState({cardNumber: event.target.value})
  }
  handleFullNameChange(event) {
    this.setState({fullName: event.target.value})
  }
  handleSecurityCodeChange(event) {
    this.setState({securityCode: event.target.value})
  }
  handleEndDateChange(event) {
    this.setState({endDate: event.target.value})
  }
  render() {
    return (
      <div className="cash-in-container">
        <div className="header">
          <FontAwesomeIcon icon={faCreditCard} className="icon" />
          Cash In
        </div>
        <div className="body">
          <div className="input-container">
            <label htmlFor="amount">
              Amount
            </label>
            <input type="text" name="amount" value={this.state.amount} onChange={this.handleAmountChange}/>
          </div>
          <div className="radio-buttons-container">
            <div className="pretty p-default p-round">
              <input type="radio" id="credit-card" name="payment" value="Credit Card" checked={this.state.payment === "Credit Card"} onChange={this.handlePaymentChange}/>
              <div className="state p-success">
                <label htmlFor="credit-card">Credit Card</label>
              </div>
            </div>
            <div className="pretty p-default p-round">
              <input type="radio" id="debit-card" name="payment" value="Debit Card"  checked={this.state.payment === "Debit Card"} onChange={this.handlePaymentChange}/>
              <div className="state p-success">
                <label htmlFor="debit-card">Debit Card</label>
              </div>
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="card-number">
              Card Number
            </label>
            <input type="text" name="card-number" value={this.state.cardNumber} onChange={this.handleCardNumberChange}/>
          </div>
          <div className="input-container">
            <label htmlFor="full-name">
              Full Name
            </label>
            <input type="text" name="full-name" value={this.state.fullName} onChange={this.handleFullNameChange}/>
          </div>
          <div className="inline-inputs-container">
            <div className="input-container security-code-input">
              <label htmlFor="security-code">
                Security code
              </label>
              <input type="text" name="security-code" value={this.state.securityCode} onChange={this.handleSecurityCodeChange}/>
            </div>
            <div className="input-container end-date-input">
              <label htmlFor="end-date">
                End Date
              </label>
              <input type="text" name="end-date" value={this.state.endDate} onChange={this.handleEndDateChange}/>
            </div>
          </div>
          <div className="buttons-container">
            <button className="button cancel">Cancel</button>
            <button className="button confirm" onClick={console.log(this.state)}>Confirm</button>
          </div>
        </div>
      </div>
    );
  }
}
