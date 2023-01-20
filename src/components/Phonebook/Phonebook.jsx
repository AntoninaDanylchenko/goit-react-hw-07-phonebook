import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

const Phonebook = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = { id: nanoid(), name, number };
    dispatch(addContact(newContact));
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit} className={css.phonebookForm}>
      <label htmlFor="nameInputId" className={css.phonebookLabel}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          id="nameInputId"
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          className={css.phonebookInput}
          required
        />
      </label>
      <label htmlFor="numberInputId" className={css.phonebookLabel}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          id="numberInputId"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          className={css.phonebookInput}
          required
        />
      </label>
      <button type="submit" className={css.phonebookSubmit}>
        Add contact
      </button>
    </form>
  );
};

export default Phonebook;
