import React from 'react';
import '../css/CashIn.css'
import 'pretty-checkbox/dist/pretty-checkbox.min.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCreditCard} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

export default class CashIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromCVU: localStorage.getItem('cvu'),
      debitCard: 'false',
      amount: '',
      cardNumber: '',
      fullName: '',
      endDate: '',
      securityCode: '',
      error: ''
    };
      this.handleAmountChange = this.handleAmountChange.bind(this);
      this.handlePaymentChange = this.handlePaymentChange.bind(this);
      this.handleCardNumberChange = this.handleCardNumberChange.bind(this);
      this.handleFullNameChange = this.handleFullNameChange.bind(this);
      this.handleSecurityCodeChange = this.handleSecurityCodeChange.bind(this);
      this.handleEndDateChange = this.handleEndDateChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.goBack = this.goBack.bind(this)
      this.checkInput = this.checkInput.bind(this)
  }
  handleAmountChange(event) {
    this.setState({amount: event.target.value})
  }
  handlePaymentChange(event) {
    this.setState({debitCard: event.target.value})
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
  handleEndDateChange(date) {
    this.setState({endDate: date})
  }
  goBack(){
    this.props.history.push('/movimientos')
  }

  checkInput = () =>{
    if (this.state.amount.trim().length < 1
        || this.state.cardNumber.trim().length < 1
        || this.state.fullName.trim().length < 1
        || this.state.securityCode.trim().length < 1
        || this.state.endDate.trim().length < 1
    ) {
      this.setState({ error: "Campos vacios..." });
      return;
    }
    if (this.state.cardNumber.trim().length !== 16) {
      this.setState({ error: "Numero de tarjeta mal formado..." });
      return;
    }
    if (parseInt(this.state.idCard) === "number") {
      this.setState({error: "Ingrese un número en el id card"});
      return;
    }
    this.handleSubmit()
  }

  async handleSubmit() {
      const dateWithSlashes = moment(this.state.endDate).format('DD/MM/YYYY');
    axios.post('http://localhost:7000/cashin', Object.assign(this.state, {endDate: dateWithSlashes})).then((res) => {
      this.goBack()
    })
  }
  assertLogIn() {
      if (localStorage.getItem('cvu') === '')
      this.props.history.push('/login')
  }

  componentDidMount() {
    this.assertLogIn()
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
              <input type="radio" id="credit-card" name="payment" value="false" checked={this.state.debitCard === 'false'} onChange={this.handlePaymentChange}/>
              <div className="state p-success">
                <label htmlFor="credit-card">Credit Card</label>
              </div>
            </div>
            <div className="pretty p-default p-round">
              <input type="radio" id="debit-card" name="payment" value="true"  checked={this.state.debitCard === 'true'} onChange={this.handlePaymentChange}/>
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
              <DatePicker
                selected={this.state.endDate}
                onChange={date => this.handleEndDateChange(date)}
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>
          <div className="buttons-container">
            <button className="button cancel" onClick={this.goBack}>Cancel</button>
            <button className="button confirm" onClick={this.checkInput}>Confirm</button>
          </div>
        </div>
      </div>
    );
  }
}
