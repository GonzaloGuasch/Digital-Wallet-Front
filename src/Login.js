import React from 'react';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.css'

class Login extends React.Component{
    render() {
        return(
        <div className="DivLog">
            <form class="form-group">
                <h3>Nombre de Usuario</h3>
                <input type="text" className="form-control" id="uname" placeholder="Username" name="uname"
                       required></input> <br></br>

                <h3>Contraseña</h3>
                    <input type="password" className="form-control" id="pwd" placeholder="Password" name="pswd"
                           required></input> <br></br><br></br>
                <button type="button" className="btn btn-primary btn-block">Logueame!</button>
                <br/>

                <button type="button" className="btn btn-link">Register</button>
            </form>

        </div>
        )};
    
}

    export default Login