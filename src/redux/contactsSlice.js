import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'tasks',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      const alertContact = state.filter(contact =>
        contact.name.toLowerCase().includes(action.payload.name.toLowerCase())
      );
      alertContact.length
        ? alert(`${action.payload.name} is already in contacts`)
        : state.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
