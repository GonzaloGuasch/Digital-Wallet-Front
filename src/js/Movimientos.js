import React from 'react'
import '../css/Movimientos.css'
import Movimiento from './Movimiento.js'
import {movimientosDeCVU, saldoDe} from "./api";

export default class Movimientos extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            cvu: localStorage.getItem('cvu'),
            movimientos: [],
            saldo: ''
        };
        this.setearDinero = this.setearDinero.bind(this);
        this.redirectToCashIn = this.redirectToCashIn.bind(this);
        this.redirectToLog = this.redirectToLog.bind(this);
        this.redirectToProfile = this.redirectToProfile.bind(this);
        this.redirectToTransaction = this.redirectToTransaction.bind(this);
    }

    componentDidMount() {
        const cvu = this.state.cvu;
        movimientosDeCVU({cvu: cvu}).then(res =>
        {
            this.setState({movimientos: res});
        });
        saldoDe({cvu: cvu}).then(res => this.setearDinero(res))

    }
    setearDinero(res){
        const dinero = JSON.parse(res);
        this.setState({
            saldo: dinero.balance
        })
    }

    redirectToTransaction() {
        this.props.history.push("/transfer")
    }
    redirectToCashIn() {
        this.props.history.push("/cashIn")
    }

    redirectToProfile() {
        this.props.history.push("/profile")
    }
    redirectToLog() {
        this.props.history.push("/login")
    }

    render(){
        const movimientos = this.state.movimientos.map(movimiento => {
            return(
                <Movimiento movimiento={movimiento}/>
            )});

        return(
            <div>
                <div className="Saldo-Container">
                    <div>Saldo:</div>
                    <div className="Saldo-Money">
                        {this.state.saldo}
                    </div>
                    <div className="Panel-Container">
                        <button onClick={this.redirectToTransaction}>T</button>
                        <button className="center-buttom" onClick={this.redirectToCashIn}>C</button>
                        <button onClick={this.redirectToProfile}>P</button>
                    </div>

                </div>
                <div className="Historial">Historial</div>
                <div className="Historial-Cointeiner">
                    <table className='Table-Cointeiner' width="100%" border="0">
                        {movimientos}
                    </table>
                </div>
                <button class="button-container" onClick={this.redirectToLog}> Sign out</button>
            </div>
        )};

}
