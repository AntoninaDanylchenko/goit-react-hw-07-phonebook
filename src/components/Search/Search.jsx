import React from 'react';
import css from './Search.module.css';

const Search = ({ value, onChange }) => {
  return (
    <label htmlFor="nameInputId" className={css.findLabel}>
      Find contacts by name
      <input
        type="text"
        placeholder=""
        name="filterContact"
        value={value}
        id="nameInputId"
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
    </label>
  );
};

export default Search;
