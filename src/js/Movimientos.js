import React from 'react'
import '../css/Movientos.css'
import Movimiento from './Movimiento.js'
import {movimientosDeCVU} from "./api";
import {saldoDe} from "./api";

export default class Movimientos extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            cvu: props.cvu,
            movientos: []
        };
        this.amountOfCVU = this.amountOfCVU.bind(this)
    }

    componentDidMount() {
        const cvu = this.state.cvu;
        let res = movimientosDeCVU({cvu: cvu}).then(res =>
        {
            console.log(res.movimientos);
            console.log(res.message);
            console.log(res);
            this.setState({movientos: res.movimientos});
        });
    }

    amountOfCVU(){
        const cvu = this.state.cvu;
        const res = saldoDe({cvu: cvu});
    }

    back(){

    }

    render(){
        const misMovimientos = this.state.movientos.map(unMoviento => {
            return(
                <Movimiento movimiento= {unMoviento} />
            )});

        return(
            <div>
                <div className="Saldo-Container">
                    <div>Saldo de:</div>
                    <div className="Saldo-Money">
                        { this.amountOfCVU()}
                    </div>
                </div>
                <div className="Historial">Historial</div>
                <div className="Historial-Cointeiner">
                    <table className='Table-Cointeiner' width="100%" border="0">
                        {misMovimientos}
                    </table>
                </div>
                <button class="button-container" onClick={this.back}> Volver </button>
            </div>
        )};

}
