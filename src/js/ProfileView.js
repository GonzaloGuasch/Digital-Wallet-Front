import React from 'react';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import '../css/ProfileView.css';
import Button from "@material-ui/core/Button";


class ProfileView extends React.Component {

    constructor(props) {
        super(props);

        console.log(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            cvu: "",
            amount: "",
        };
    }

    render() {
        const StyledButton = this.styledButton();
        return (
            <div className="fields">
                <div className={"userbar"}>
                    <i className="user circle icon usericon"></i></div>

                <div className="fields">
                    {this.textField("First Name", this.state.firstName, false)}
                    {this.textField("Last Name", this.state.lastName, false)}
                    {this.textField("Email", this.state.email, true)}
                    {this.textField("CVU", this.state.cvu, true)}
                    {this.textField("Amount", this.state.amount, true)}
                    <div className={"goback"}>
                        <StyledButton>Go back</StyledButton>
                    </div>
                </div>
            </div>
        )
    }

    styledButton() {
        const StyledButton = withStyles({
            root: {
                background: 'linear-gradient(45deg, #038C7F 100%, #038C7F 100%)',
                borderRadius: 3,
                border: 0,
                color: '#ffffff',
                height: 35,
                padding: '0 25px',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            },
            label: {
                textTransform: 'none',
            },
        })(Button);
        return StyledButton;
    }

    textField(label, value, readOnly, type) {
        return (
            <div className="field">
                <TextField label={label} type={type} defaultValue={value} margin="dense"
                           InputProps={{
                               readOnly: {readOnly},
                           }}
                           variant="filled"
                />
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