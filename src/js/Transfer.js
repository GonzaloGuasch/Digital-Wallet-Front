import React from 'react';
import '../css/Transfer.css';
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
        this.setAmount = this.setAmount.bind(this);
        this.setCVU = this.setCVU.bind(this);
        this.goBack = this.goBack.bind(this);
        this.handleError = this.handleError.bind(this);
    }
    checkTransferencia(){
        const amount = this.state.amount;
        const fromCVU = localStorage.getItem('cvu');
        const toCVU = this.state.cvu;

        this.setState({errorMessage: ""});
        if (this.state.cvu.trim().length < 1 || this.state.amount.trim().length < 1) {
            this.setState({errorMessage: "Campos vacios..."});
            return;
        }
        if (this.state.amount < 1) {
            this.setState({errorMessage: "El monto debe ser mayor a 1."});
            return;
        }
        crearTransferencia ({
            fromCVU: fromCVU,
            toCVU: toCVU,
            amount: amount
        }).then(res => this.goBack())
            .catch(error =>this.handleError(error))};

    handleError = (error) =>{
        if (error.response && error.response.status === 401) {
            this.setState({errorMessage: "El cvu destino no existe."});

        } else {
            this.setState({errorMessage: "Estamos teniendo problemas..."});
        }
    }

    setAmount(event) {
        this.setState({amount: event.target.value})
    }

    setCVU(event) {
        this.setState({cvu: event.target.value})
    }
    goBack(){
        this.props.history.push('/movimientos')
    }

    componentDidMount() {
        this.assertLogin();
    }

    assertLogin() {
        if (localStorage.getItem('cvu') === '')
            this.props.history.push('/login')
    }

    render(){
        return(
            <div className="Transfer-Conteiner">
                <div className= "logo"></div>
                <div className ="Transfer-name"> Transfer</div>
                <div className ="Amount-CVU-name">CVU</div>
                <input className="text-box" type="text" value={this.state.cvu} onChange={this.setCVU}/>
                <div className ="Amount-CVU-name">Amount</div>
                <input className="text-box" type="text" value={this.state.amount} onChange={this.setAmount}/>
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
