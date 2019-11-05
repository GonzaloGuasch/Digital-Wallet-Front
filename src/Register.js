import React from 'react';
import './Register.css'
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard} from '@fortawesome/free-solid-svg-icons'


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
            <div className="register">
                <div className="header-Reg">
                    <FontAwesomeIcon icon={"faCreditCard"} className="icon" />
                    <h1>Digital Wallet</h1>
                </div>

                <form className="formDW">


                    <h5>Email</h5>
                    <input type="text"
                           className="inputTextForm"
                           placeholder="Email..."
                           value={this.state.email}
                           onChange={this.handleEmail}
                           >
                    </input>
                    <br>
                    </br>

                    <h5>First name</h5>
                    <input type="text"
                           className="inputTextForm"
                           placeholder="Write your first name..."
                           value={this.state.firstName}
                           onChange={this.handleFirstName}
                           >
                    </input>
                    <br>
                    </br>

                    <h5>Last name</h5>
                    <input type="text"
                           className="inputTextForm"
                           placeholder="Write your last name..."
                           value={this.state.lastName}
                           onChange={this.handleLastName}
                           >
                    </input>
                    <br>
                    </br>

                    <h5>Id card</h5>
                    <input type="text"
                           className="inputTextForm"
                           placeholder="Write your id card"
                           value={this.state.idCard}
                           onChange={this.handleIdCard}
                           >
                    </input>
                    <br>
                    </br>

                    <h5>Password</h5>
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
                            onClick={this.registerUser}>
                        Register
                    </button>
                    <br/>

                    <button type="submit"
                            className="btnDenied"
                            value="Submit">
                        Back
                    </button>
                </form>

            </div>
        )};

}
export default Register