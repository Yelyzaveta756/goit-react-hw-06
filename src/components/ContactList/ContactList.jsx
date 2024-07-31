import React from 'react';
import Contact from '../Contact/Contact';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';

const ContactList = () => {

const contacts = useSelector(selectContacts)
const filter = useSelector(selectNameFilter)

const filteredContacts = contacts.filter((contact) => {
    if (filter.trim() === '') {
        return contacts;
    }
     return contact.name.toLowerCase().includes(filter)
  }
);

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.listItem}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
