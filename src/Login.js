import React from 'react';
import './Login.css'
import axios from "axios"


class Login extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            email: '',
            password: '',
        };
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this)
    }

    handleEmail(event){
        this.setState({email: event.target.value})
    }
    handlePassword(event){
        this.setState({password: event.target.value})
    }


    handleLogError = () => {
        alert("Error")
    };
    handleLog = () => {

    };
    handleFinalyLog = () => {

    };



    logUser = () => {
        axios.post("http://localhost:7000/login", {
            email: this.state.email,
            password: this.state.password
        })
            .then(this.handleLog)
            .catch(this.handleLogError)
            .finally(this.handleFinalyLog)
    };

    render() {

        return(
        <div className="log">
            <div className="header-Log">
                <h1>DigitalWallet</h1>
            </div>
            <form className="formDW">
                <h5>Nombre de Usuario</h5>
                <input type="text"
                       className="inputTextForm"
                       placeholder="Write your username"
                       value={this.state.email}
                       onChange={this.handleEmail}
                       >
                </input>
                <br>
                </br>

                <h5>Contraseña</h5>
                    <input type="password"
                           className="inputTextForm"
                           placeholder="Write your password"
                           value={this.state.password}
                           onChange={this.handlePassword}
                           >
                    </input>
                <br>
                </br>
                <br>
                </br>

                <button type="button"
                        className="btnConfirm"
                        onClick={this.logUser}>
                    Login
                </button>
                <br/>

                <button type="submit"
                        className="btnDenied"
                        value="Submit">
                    Register
                </button>
            </form>

        </div>
        )};


}


    export default Login