import React from 'react';
import css from './Contacts.module.css';

const Contacts = ({ contacts, onDelContact }) => (
  <ul className={css.contactsList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.contactsListItem}>
        <p className={css.contactInfo}>
          {name}: {number}
        </p>
        <button
          type="button"
          onClick={() => onDelContact(id)}
          className={css.delBtn}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default Contacts;
