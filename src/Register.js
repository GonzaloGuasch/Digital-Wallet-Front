import React from 'react';
import './Register.css'
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios"


class Register extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            email: '',
            firstName: '',
            lastName: '',
            idCard: '',
            password: '',
        }

        this.handleEmail = this.handleEmail.bind(this)
        this.handleFirstName = this.handleFirstName.bind(this)
        this.handleLastName = this.handleLastName.bind(this)
        this.handleIdCard = this.handleIdCard.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
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


    registerUser = () => {
        axios.post("http://localhost:7000/register",{
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            idCard: this.state.idCard,
            password: this.state.password
        })
    }

    render() {
        return(
            <div className="DivRegister">
                <form class="form-group">

                    <h5>Email</h5>
                    <input type="text"
                           className="form-control"
                           placeholder="Email..."
                           value={this.state.email}
                           onChange={this.handleEmail}
                           >
                    </input>
                    <br>
                    </br>

                    <h5>First name</h5>
                    <input type="text"
                           className="form-control"
                           placeholder="Write your first name..."
                           value={this.state.firstName}
                           onChange={this.handleFirstName}
                           >
                    </input>
                    <br>
                    </br>

                    <h5>Last name</h5>
                    <input type="text"
                           className="form-control"
                           placeholder="Write your last name..."
                           value={this.state.lastName}
                           onChange={this.handleLastName}
                           >
                    </input>
                    <br>
                    </br>

                    <h5>IdCard</h5>
                    <input type="text"
                           className="form-control"
                           placeholder="Write your idCard"
                           value={this.state.idCard}
                           onChange={this.handleIdCard}
                           >
                    </input>
                    <br>
                    </br>

                    <h5>Password</h5>
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
                            onClick={this.registerUser}>
                        Registrame!
                    </button>
                    <br/>

                    <button type="submit"
                            className="btn btn-link"
                            value="Submit">
                        Back
                    </button>
                </form>

            </div>
        )};

}
export default Register