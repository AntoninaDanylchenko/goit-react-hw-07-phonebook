import React from 'react';
import css from './Search.module.css';
import PropTypes from 'prop-types';

const Search = ({ value, onChange }) => {
  return (
    <label htmlFor="findInputId" className={css.findLabel}>
      Find contacts by name
      <input
        type="text"
        placeholder=""
        name="filterContact"
        value={value}
        id="findInputId"
        onChange={onChange}
        className={css.findInput}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
    </label>
  );
};

Search.prototype = {
  value: PropTypes.string.isRequired,
};

export default Search;
