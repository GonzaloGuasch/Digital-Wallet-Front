import React from 'react';
import '../css/ProfileView.css';
import {datosDeUser, modificarApellidoDeUser, modificarNombreDeUser} from "./api";

class ProfileView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            cvu: '',
            amount: 0,
        };
        this.handleEmail = this.handleEmail.bind(this);
        this.handleFirstname = this.handleFirstname.bind(this);
        this.handleLastname = this.handleLastname.bind(this)
    }

    redirectToMovimientos = () => {
        this.props.history.push('/movimientos')
    };
    guardarCambios = () => {
        modificarNombreDeUser({firstname: this.state.firstname, cvu: this.state.cvu});
        modificarApellidoDeUser({lastname: this.state.lastname, cvu: this.state.cvu})
    };

    render() {
        return (
            <div className="fields">
                <div className={"userbar"}>
                    <i className="user circle icon usericon"></i></div>

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
                            onClick={this.redirectToMovimientos}
                    >
                        Go Back
                    </button>
                    <button type="submit"
                            className="btnDenied"
                            value="Submit"
                            onClick={this.guardarCambios}
                    >
                        Save
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
                email: res.email,
                amount: 0
            });
        });
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
}

export default ProfileView