import React from 'react';
import PropTypes from 'prop-types';
import { Person } from '../../models/person.class';

const Contact = ({ contact }) => {
    return (
        <div>
            <h2>
                Nombre y apellido: {contact.name} {contact.lastName}
            </h2>
            <h3>
                Email: {contact.email}
            </h3>
            <h4>
                El contacto se encuentra: {contact.conected ? 'Contacto en linea' : 'Contacto no disponible'}
            </h4>
        </div>
    );
};

Contact.propTypes = {
    contact: PropTypes.instanceOf(Person)
};

export default Contact;
