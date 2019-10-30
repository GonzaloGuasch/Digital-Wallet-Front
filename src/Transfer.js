import React from 'react';
import './Transfer.css'

class Transfer extends React.Component{
    render(){
        return(
            <div className="Transfer-Conteiner">
                <div className= "logo"></div>
                <div className ="Transfer-name"> Transfer</div>
                <div className ="Amount-CVU-name">CVU</div>
                <input className="text-box" type="text"/>
                <div className ="Amount-CVU-name">Amount</div>
                <input className="text-box" type="text"/>
                <div className="Button-container">
                    <button className="Accept-button">Confirm</button>
                    <button className="Cancel-button">Cancel</button>
                </div>
            </div>

        )};
}

export default Transfer