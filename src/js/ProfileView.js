import React from 'react';
import '../css/ProfileView.css';
import {datosDeUser, modificarApellidoDeUser, modificarNombreDeUser, saldoDe} from "./api";

class ProfileView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            cvu: '',
            amount: 0,
            error: localStorage.getItem("profileError") || ''
        };
        this.handleEmail = this.handleEmail.bind(this);
        this.handleFirstname = this.handleFirstname.bind(this);
        this.handleLastname = this.handleLastname.bind(this);
        this.setearDinero = this.setearDinero.bind(this);
    }

    guardarCambiosYRedirectToMovimientos = () => {
        modificarNombreDeUser({firstname: this.state.firstname, cvu: this.state.cvu});
        modificarApellidoDeUser({lastname: this.state.lastname, cvu: this.state.cvu});
        if (this.state.lastname.trim().length < 1 || this.state.firstname.trim().length < 1) {
            localStorage.setItem('profileError', "Error: Neither name nor last name can be empty");
            return;
        }
        localStorage.setItem('profileError', '');
        this.props.history.push('/movimientos');
    };

    render() {
        return (
            <div className="fields">
                <div className={"userbar"}>
                    <i className="user circle icon usericon"></i></div>
                <div className="errorInput">
                    <a className="valid-input">{this.state.error}</a>
                </div>
                <form className="formDW">
                    <h5 className="titleInput">First name</h5>
                    <input type="text"
                           className="inputTextForm"
                           placeholder={this.state.firstname}
                           value={this.state.firstname}
                           onChange={this.handleFirstname}
                    >
                    </input>
                    <h5 className="titleInput">Last name</h5>
                    <input type="text"
                           className="inputTextForm"
                           placeholder={this.state.lastname}
                           value={this.state.lastname}
                           onChange={this.handleLastname}
                    >
                    </input>
                    <h5 className="titleInput">Email</h5>
                    <label className="lbInfoUser">
                        {this.state.email}
                    </label>
                    <h5 className="titleInput">CVU</h5>
                    <label className="lbInfoUser">
                        {this.state.cvu}
                    </label>
                    <h5 className="titleInput">Amount</h5>
                    <label className="lbInfoUser">
                        $ {this.state.amount}
                    </label>
                    <button type="submit"
                            className="btnDenied"
                            value="Submit"
                            onClick={this.guardarCambiosYRedirectToMovimientos}
                    >
                        Save & Go Back
                    </button>
                </form>
            </div>
        )
    }

    componentDidMount() {
        const cvu = localStorage.getItem('cvu');
        datosDeUser({cvu: cvu}).then(res => {
            this.setState({
                cvu: cvu,
                firstname: res.firstName,
                lastname: res.lastName,
                email: res.email
            });
        }).then(saldoDe({cvu: cvu}).then(res => this.setearDinero(res)))
    }

    handleEmail(event) {
        this.setState({email: event.target.value})
    }

    handleFirstname(event) {
        this.setState({firstname: event.target.value})
    }

    handleLastname(event) {
        this.setState({lastname: event.target.value})
    }

    setearDinero(res) {
        const amount = JSON.parse(res);
        this.setState({
            amount: amount.balance
        })
    }
}

export default ProfileView