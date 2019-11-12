import React from 'react';
import './Transfer.css';
import {crearTransferencia} from "./api";


class Transfer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cvu: '',
            amount: '',
            errorMessage: ''
        };
        this.checkTransferencia = this.checkTransferencia.bind(this);
        this.seatleAmount = this.seatleAmount.bind(this);
        this.seatleCVU = this.seatleCVU.bind(this);
        this.goBack = this.goBack.bind(this);
        this.handleError = this.handleError.bind(this);
    }
    checkTransferencia(){
        const amount = this.state.amount;
        const fromCVU = this.props.user.toString();
        const toCVU = this.state.cvu;
        crearTransferencia({
            fromCVU,
            toCVU,
            amount
        }).catch(this.handleError)};

    handleError = (error) =>{
        console.log(error.response);
        this.setState({
            errorMessage: error.response.statusText
        })
    }

    seatleAmount(event){
        this.setState({amount: event.target.value})
    }
    seatleCVU(event){
        this.setState({cvu: event.target.value})
    }
    goBack(){
        this.props.history.pop()
    }

    render(){
        return(
            <div className="Transfer-Conteiner">
                <div className= "logo"></div>
                <div className ="Transfer-name"> Transfer</div>
                <div className ="Amount-CVU-name">CVU</div>
                <input className="text-box" type="text" value = {this.state.cvu} onChange = {this.seatleCVU} />
                <div className ="Amount-CVU-name">Amount</div>
                <input className="text-box" type="text"  value = {this.state.amount} onChange = {this.seatleAmount} />
                <div className="Button-container">
                    <button className="Accept-button" onClick={this.checkTransferencia}>Confirm</button>
                    <button className="Cancel-button" onClick={this.goBack}>Cancel</button>
                </div>
                <div className="error-container">
                    {this.state.errorMessage}
                </div>
            </div>

        )};
}

export default Transfer