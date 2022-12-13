import React from 'react';

const Contacts = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, name }) => (
      <li key={id}>{name}</li>
    ))}
  </ul>
);

export default Contacts;
