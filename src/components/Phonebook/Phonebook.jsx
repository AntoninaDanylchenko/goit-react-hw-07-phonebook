import { useState } from 'react';
// import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

const Phonebook = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, phone }));
    reset();
  };
  const reset = () => {
    setName('');
    setPhone('');
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
          name="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
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
