import React, { Component } from 'react';
import Phonebook from './Phonebook/Phonebook';
import Section from './Section/Section';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
        }}
      >
        <Section title="Phonebook">
          <Phonebook />
        </Section>
      </div>
    );
  }
}
export default App;
