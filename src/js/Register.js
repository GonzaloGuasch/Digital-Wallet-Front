import React from 'react';
import '../css/Register.css'
import axios from "axios"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


class Register extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            email: '',
            firstName: '',
            lastName: '',
            idCard: '',
            password: '',
            error: '',
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleIdCard = this.handleIdCard.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.redirectToLogin = this.redirectToLogin.bind(this);
        this.checkRegister = this.checkRegister.bind(this);
        this.handleReg = this.handleReg.bind(this);
        this.registerUser = this.registerUser.bind(this);
        this.handleErrorReg = this.handleErrorReg.bind(this);
        this.logUser = this.logUser.bind(this)
    }

    handleEmail(event){
        this.setState({email: event.target.value})
    }
    handleFirstName(event){
        this.setState({firstName: event.target.value})
    }
    handleLastName(event){
        this.setState({lastName: event.target.value})
    }
    handleIdCard(event){
        this.setState({idCard: event.target.value})
    }
    handlePassword(event){
        this.setState({password: event.target.value})
    }

    redirectToLogin = () => {
        this.props.history.push('/')
    };

    checkRegister = () =>{
        this.setState({error: ""});
        if (this.state.email.trim().length < 1
            || this.state.password.trim().length < 1
            || this.state.firstName.trim().length < 1
            || this.state.lastName.trim().length < 1
            || this.state.idCard.trim().length < 1
        ) {
            this.setState({ error: "Campos vacios..." });
            return;
        }
        if (!this.state.email.trim().includes("@")) {
            this.setState({ error: "Email mal formado..." });
            return;
        }
        if (typeof this.state.idCard === typeof String) {
            this.setState({error: "Ingrese un número en el id card"});
            return;
        }
        this.registerUser()
    };

    logUser = () => {
        axios.post("http://localhost:7000/login", {
            email: this.state.email,
            password: this.state.password
        })
            .then(this.handleLog)
    };

    handleLog = (res) => {
        localStorage.setItem('cvu', res.data.cvu);
        this.handleReg()
    };

    registerUser = () => {
        axios.post("http://localhost:7000/register",{
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            idCard: this.state.idCard,
            password: this.state.password
        })
            .then(this.logUser)
            .catch(this.handleErrorReg)
    };
    handleReg = () => {
        this.redirectToNextPage()
    };
    redirectToNextPage = () => {
        this.props.history.push('/movimientos')
    };
    handleErrorReg = () => {
        this.setState({error: "Estamos teniendo problemas..."});
    };

    render() {
        return(
            <div className="register">
                <div className="header-Reg">
                    <FontAwesomeIcon icon={"faCreditCard"} className="icon" />
                    <h1>Digital Wallet</h1>
                </div>

                <form className="formDW">


                    <h5 className="titleInput">Email</h5>
                    <input type="text"
                           className="inputTextForm"
                           placeholder="Email..."
                           value={this.state.email}
                           onChange={this.handleEmail}
                           >
                    </input>
                    <br>
                    </br>

                    <h5 className="titleInput">First name</h5>
                    <input type="text"
                           className="inputTextForm"
                           placeholder="Write your first name..."
                           value={this.state.firstName}
                           onChange={this.handleFirstName}
                           >
                    </input>
                    <br>
                    </br>

                    <h5 className="titleInput">Last name</h5>
                    <input type="text"
                           className="inputTextForm"
                           placeholder="Write your last name..."
                           value={this.state.lastName}
                           onChange={this.handleLastName}
                           >
                    </input>
                    <br>
                    </br>

                    <h5 className="titleInput">Id card</h5>
                    <input type="text"
                           className="inputTextForm"
                           placeholder="Write your id card"
                           value={this.state.idCard}
                           onChange={this.handleIdCard}
                           >
                    </input>
                    <br>
                    </br>

                    <h5 className="titleInput">Password</h5>
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
                    <button type="button"
                            className="btnConfirm"
                            onClick={this.checkRegister}>
                        Register
                    </button>
                    <br/>

                    <button type="submit"
                            className="btnDenied"
                            value="Submit"
                            onClick={this.redirectToLogin}
                    >
                        Back
                    </button>
                </form>

            </div>
        )};

}
export default Register
