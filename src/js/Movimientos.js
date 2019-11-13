import React from 'react'
import '../css/Movientos.css'
import Movimiento from './Movimiento.js'
import {movimientosDeCVU} from "./api";
import {saldoDe} from "./api";
import { useHistory } from "react-router-dom";

export default class Movimientos extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            cvu: localStorage.getItem('cvu'),
            movimientos: [],
            saldo: ''
        };
        this.amountOfCVU = this.amountOfCVU.bind(this);
        this.setearDinero = this.setearDinero.bind(this);
        this.asd = this.asd.bind(this);
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
    amountOfCVU(){
        const cvu = this.state.cvu;
        const res = saldoDe({cvu: cvu});
    }

    redirectToTransaction() {
        let history = useHistory();
        history.push("/transfer")
    }
    redirectToCashIn() {
        let history = useHistory();
        history.push("/cashIn")
    }
    redirectToProfile() {

        localStorage.setItem('amount', this.state.amount)

        let history = useHistory();
        history.push("/profile")
    }

    render(){
        const misMovimientos = this.state.movimientos.map(unMoviento => {
            return(
                <Movimiento movimiento= {unMoviento} />
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
                        {misMovimientos}
                    </table>
                </div>
                <button class="button-container" onClick={this.back}> Sing out </button>
            </div>
        )};

}
