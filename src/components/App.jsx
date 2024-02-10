import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter.js';
import { Forma } from './Form/Form.js';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addState = ({ name, number }) => {
    const contact = contacts.find(
      contacts =>
        contacts.name.toLowerCase() === name.toLowerCase() ||
        contacts.number === number
    );
    if (contact) {
      alert(`Is already in contacts`);
      return;
    }
    const newContact = { id: nanoid(), name, number };

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const nameFilter = name => {
    setFilter(name);
  };

  // const getFilteredContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  const deleteContacts = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Forma onAdd={addState} />
      <Filter filter={visibleContacts} onFilterName={nameFilter} />
      <Contacts onContactsDelete={deleteContacts} contacts={visibleContacts} />
    </div>
  );
};
