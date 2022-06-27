import React from 'react';
import { Person } from '../../models/person.class';
import Contact from '../pure/contact';

const ContactList = () => {

    const defaultContact = new Person('Marianela', 'Grau', 'marianelaclara@gmail.com', true);

    return (
        <div>
            <div> 
            Tus contactos: 
            </div>
            <Contact contact={ defaultContact }></Contact>
        </div>
    );
};

export default ContactList;
