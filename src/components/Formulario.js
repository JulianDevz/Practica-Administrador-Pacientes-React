import React, {Fragment, useState} from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    //Crear State de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    });

    //Validar que exista un error al llenar los campos del form
    const [error, actualizarError] = useState(false);

    //Funcion que se ejecuta cada que el usuario escribe en el input
    const actualizarState = e => {
        actualizarCita({ //Tomamos el valor que cambia del primer state
            ...cita,
            [e.target.name]: e.target.value //Guarda los datos digitados
        })
    }

    //Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    //Cuando el usuario presiona agregar cita
    const submitCita = e => {
        e.preventDefault(); //Evita que envie los datos por metodo GET

        // Validar los campos
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){ //El .trim permite ver si la palabra en el canpo tiene espacios al principio o al final
            actualizarError(true);
            return;
        }
        // Eliminar el mensaje previo
        actualizarError(false);

        // Asignar un ID unico
        cita.id = uuid();

        // Crear la cita
        crearCita(cita);

        // Reiniciar el form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: '',
        })
    }

    return ( 
        <Fragment>
            <h1>Crear Cita</h1>

            {/* Alerta de error al enviar los campos vacios */}
            {error 
            ? <p className="alerta-error">Todos los campos son obligatorios</p>
            : null}

            <form onSubmit={submitCita}> {/* Sumit es el evento que escucha todo lo que se enviara en el form */}
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState} //Nos permite saber que se esta escribiendo en la caja
                    value={mascota} //Nos permitira formatear el formulario
                />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />  

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />  

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />  

                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
     );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
 
export default Formulario;
