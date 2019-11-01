import React from 'react';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios"

class Login extends React.Component{

    constructor(props){
        super(props)

        this.state ={
            email: '',
            password: '',
        }
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
    }

    handleEmail(event){
        this.setState({email: event.target.value})
    }
    handlePassword(event){
        this.setState({password: event.target.value})
    }

    logUser = () =>{
        axios.post("http://localhost:7000/login",{
            email: this.state.email,
            password: this.state.password
        })
    }

    render() {

        return(
        <div className="DivLog">
            <form class="form-group" onSubmit={this.nextPage}>
                <h5>Nombre de Usuario</h5>
                <input type="text"
                       className="form-control"
                       placeholder="Write your username"
                       value={this.state.email}
                       onChange={this.handleEmail}
                       >
                </input>
                <br>
                </br>

                <h5>Contraseña</h5>
                    <input type="password"
                           className="form-control"
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
                        className="btn btn-primary btn-block"
                        onClick={this.logUser}>
                    Logueame!
                </button>
                <br/>

                <button type="submit"
                        className="btn btn-link"
                        value="Submit">
                    Register
                </button>
            </form>

        </div>
        )};


}


    export default Login