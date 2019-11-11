import React from 'react'
import './UnMovimiento.css'

class Movimiento extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movimiento: props.movimiento,
        }
    }

    render(){
        return(
            <div>
                <div className="inner" id="Bottom-border">
                    <div className="children">{this.state.movimiento.dateTime}</div>
                    <div className="children">{this.state.movimiento.description}</div>
                    <div className="children" id = "money">${this.state.movimiento.amount}</div>
                </div>
            </div>
        )}
}

export default Movimiento;