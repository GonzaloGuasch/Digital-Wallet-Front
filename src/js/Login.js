import React from 'react';
import '../css/Login.css'
import axios from "axios"
import '../css/index.css'


class Login extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: '',
        };
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.logUser = this.logUser.bind(this);
        this.checkInput = this.checkInput.bind(this);
        this.redirectToNextPage = this.redirectToNextPage.bind(this);
        this.redirectToRegister = this.redirectToRegister.bind(this);
        this.handleLog = this.handleLog.bind(this);
        this.handleErrorLog = this.handleErrorLog.bind(this)
    }

    handleEmail(event) {
        this.setState({email: event.target.value})
    }

    handlePassword(event) {
        this.setState({password: event.target.value})
    }

    redirectToNextPage = () => {
        this.props.history.push('/movimientos')
    };
    redirectToRegister = () => {
        this.props.history.push('/register')
    };

    checkInput = () => {
        this.setState({error: ""});
        if (this.state.email.trim().length < 1 || this.state.password.trim().length < 1) {
            this.setState({error: "Campos vacios..."});
            return;
        }
        if (!this.state.email.trim().includes("@")) {
            this.setState({error: "Usuario mal formado..."});
            return;
        }
        this.logUser()
    };

    logUser = () => {
        axios.post("http://localhost:7000/login", {
            email: this.state.email,
            password: this.state.password
        })
            .then(this.handleLog)
            .catch(this.handleErrorLog)
    };

    handleLog = (res) => {
        localStorage.setItem('cvu', res.data.cvu);
        console.log(localStorage.getItem('cvu'));

        this.redirectToNextPage()
    };
    handleErrorLog = (error) => {
        if (error.response && error.response.status === 401) {
            this.setState({error: "Usuario o contraseña incorrectos..."});
        } else {
            this.setState({error: "Estamos teniendo problemas..."});

        }
    };

    render() {

        return(
        <div className="log">
            <div className="header-Log">
                <h1>DigitalWallet</h1>
            </div>
            <form className="formDW">
                <h5 className="titleInput">Nombre de Usuario</h5>
                <input type="text"
                       className="inputTextForm"
                       placeholder="Write your username"
                       value={this.state.email}
                       onChange={this.handleEmail}
                       >
                </input>
                <br>
                </br>

                <h5 className="titleInput">Contraseña</h5>
                    <input type="password"
                           className="inputTextForm"
                           placeholder="Write your password"
                           value={this.state.password}
                           onChange={this.handlePassword}
                           >
                    </input>
                <br>
                </br>
                <div className="errorInput">
                    <label className="valid-input">{this.state.error}</label>
                </div>

                <button type="submit"
                        className="btnConfirm"
                        onClick={this.checkInput}>
                    Login
                </button>
                <br/>

                <button type="button"
                        className="btnDenied"
                        value="Submit"
                        onClick={this.redirectToRegister}
                >
                    Register
                </button>
            </form>

        </div>
        )};


}
    export default Login