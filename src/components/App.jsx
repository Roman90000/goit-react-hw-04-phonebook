import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter.js';
import { Forma } from './Form/Form.js';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addState = ({ name, number }) => {
    const contact = this.state.contacts.find(
      contacts =>
        contacts.name.toLowerCase() === name.toLowerCase() ||
        contacts.number === number
    );

    if (contact) {
      alert(`Is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  nameFilter = name => {
    this.setState({ filter: name });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getFilteredContacts();
    return (
      <div>
        <Forma onAdd={this.addState} />
        <Filter filter={visibleContacts} onFilterName={this.nameFilter} />
        <Contacts
          onContactsDelete={this.deleteContacts}
          contacts={visibleContacts}
        />
      </div>
    );
  }
}
