import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => (
    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Dueño: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>

        <button 
            className="button eliminar u-full-width"
            onClick = { () => eliminarCita(cita.id)} //Si llamamos la funcion con el arrow function, hara que se ejecuta solo cuando se haga el onclick
        >Eliminar &times;</button>
    </div>
);

//PropTypes
Cita.proptype = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;