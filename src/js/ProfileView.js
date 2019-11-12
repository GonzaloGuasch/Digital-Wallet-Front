import React from 'react';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import '../css/ProfileView.css';



class ProfileView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",//this.state.props.firstName,
            lastName: "",//this.state.props.lastName,
            email: "",//this.state.props.email,
            cvu: "",//this.state.props.cvu,
            amount: "",//this.state.props.amount,
        };
    }

    redirectToMovimientos = () =>{
        // Acá se hacen los puts

        this.props.history.push('/movimientos')
    }
    render() {
        return (
            <div className="fields">
                <div className={"userbar"}>
                    <i className="user circle icon usericon"></i></div>

                <form className="formDW">
                    <h5 className="titleInput">First name</h5>
                    <input type="text"
                           className="inputTextForm"
                           placeholder={this.state.firstName}
                           value={this.state.firstName}
                           onChange={this.handleEmail}
                    >
                    </input>
                    <h5 className="titleInput">Last name</h5>
                    <input type="text"
                           className="inputTextForm"
                           placeholder={this.state.lastName}
                           value={this.state.lastName}
                           onChange={this.handleEmail}
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
                            Save & back
                        </button>
                </form>
            </div>
        )
    }

    /*componentDidMount() {
        this.setState({
            firstName: this.props.user.firstName,
            lastName: this.props.user.lastName,
            email: this.props.user.email,
            cvu: this.props.user.cvu,
            amount: this.props.user.amount,})
    }*/
}

export default ProfileView