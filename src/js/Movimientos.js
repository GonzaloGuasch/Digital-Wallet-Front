import React from 'react'
import '../css/Movientos.css'
import Movimiento from './Movimiento.js'
import {movimientosDeCVU} from "./api";

export default class Movimientos extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            cvu: props.cvu,
            movientos: []
        };
    }

    componentDidMount() {
        const cvu = this.state.cvu;
        let res = movimientosDeCVU({cvu: cvu}).then(res =>
        {
            console.log(res)
            this.setState({movientos: res});
        });
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
                    <div className="Saldo-Money"> $300 </div>
                </div>
                <div className="Historial">Historial</div>
                <div className="Historial-Cointeiner">
                    <table className='Table-Cointeiner' width="100%" border="0">
                        {misMovimientos}
                    </table>
                </div>
            </div>
        )};

}
