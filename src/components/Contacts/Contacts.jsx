import React from 'react';
import css from './Contacts.module.css';

const Contacts = ({ contacts }) => (
  <ul className={css.contactsList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
      </li>
    ))}
  </ul>
);

export default Contacts;
