import React from 'react';
import css from './Contacts.module.css';

const Contacts = ({ contacts, onDelContact }) => (
  <ul className={css.contactsList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <button type="button" onClick={() => onDelContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default Contacts;
