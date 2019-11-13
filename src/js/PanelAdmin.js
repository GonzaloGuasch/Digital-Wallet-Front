import React from 'react';
import '../css/PanelAdmin.css'
import 'bootstrap/dist/css/bootstrap.css'


class PanelAdmin extends React.Component{
    render() {
        return(
        <div className="windowAdmin">
            <div className="filterUser">

                <h3>Listado de usuarios</h3>
                <div className="input-group mb-3" id="searchText">

                    <input type="text" className="form-control" placeholder="Search"></input>
                        <div className="input-group-append">
                            <button className="btn btn-success" type="submit">Buscar</button>
                        </div>
                </div>
            </div>
            <div className="tableUser">

            </div>
            <div className="buttons">
                <button type="button" className="btn btn-primary" id="btnVer">Ver</button>
                <button type="button" className="btn btn-primary" id="btnAgregar">Agregar</button>
                <button type="button" className="btn btn-primary" id="btnModificar">Modificar</button>
                <button type="button" className="btn btn-primary" id="btnEliminar">Eliminar</button>
            </div>

        </div>
        )};

}
export default PanelAdmin