import React from 'react';
// import PropTypes from 'prop-types';

const Phonebook = ({ onHandleChange }) => (
  <form>
    <label htmlFor="nameInputId">
      Name
      <input
        type="text"
        placeholder="Enter name"
        name="name"
        id="nameInputId"
        onChange={onHandleChange}
      />
    </label>
    <button type="submit">Add contact</button>
  </form>
);

// Phonebook.prototype = {};

export default Phonebook;
