import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox'
import './App.css';

function App() {

  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(() => {
    const contactsLocalStorage = window.localStorage.getItem('contacts-list');
    if (contactsLocalStorage === null) {
      return initialContacts;
    }else return JSON.parse(contactsLocalStorage);
  });

  useEffect(() => {
    window.localStorage.setItem('contacts-list', JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('');

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

    const handleSearch = (e) => {
        setFilter(e.target.value)
    }

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    const deleteContact = (contactId) => {
      setContacts((prevContact) => {
        return prevContact.filter((contact) => contact.id !== contactId);
      });
    };

  return (
    <div>
      <h1><b>Phonebook</b></h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox search={filter} onSearch={handleSearch}/>
      <ContactList contacts={filteredContacts} onDelete={deleteContact}/>
    </div>
  );
}

export default App;
