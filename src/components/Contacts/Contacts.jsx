import React from 'react';
import css from './Contacts.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
// import { getContacts } from 'redux/selector';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selector';

const Contacts = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const onDelContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactsList}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id} className={css.contactsListItem}>
          <p className={css.contactInfo}>
            {name}: {phone}
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
};
Contacts.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default Contacts;
