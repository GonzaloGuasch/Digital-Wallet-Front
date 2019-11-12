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
            cvu: props.user,
            movientos: [],
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
            const movimientos = JSON.parse(res);
            this.setState({movientos: movimientos.movimientos});
        });
        saldoDe({cvu: cvu}).then(res => this.setearDinero(res))

    }
    setearDinero(res){
        const dinero = JSON.parse(res);
        console.log(dinero)
        this.setState({
            saldo: dinero.balance
        })
    }
    amountOfCVU(){
        const cvu = this.state.cvu;
        const res = saldoDe({cvu: cvu});
    }

    back(){

    }

    asd() {
        let history = useHistory();
        history.push("/lalala")
    }

    render(){
        const misMovimientos = this.state.movientos.map(unMoviento => {
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
                        <button onClick={this.asd}>T</button>
                        <button className="center-buttom">C</button>
                        <button>P</button>
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
