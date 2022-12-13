import React, { Component } from 'react';
import Section from './Section/Section';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <div
        style={{
          height: '100vh',
        }}
      >
        <Section title="Phonebook">
          <Phonebook onHandleChange={this.handleChange} />
        </Section>
        <Section title="Contacts">
          <Contacts contacts={contacts} />
        </Section>
      </div>
    );
  }
}
export default App;
