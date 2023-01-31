import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

// export const selectFilteredContacts = state => {
//   const fiterContacts = state.filter
//     ? state.contacts.items.filter(contact =>
//         contact.name.toLowerCase().includes(state.filter)
//       )
//     : state.contacts.items;

//   return fiterContacts;
// };

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, queryFilter) => {
    const fiterContacts = queryFilter
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(queryFilter)
        )
      : contacts;

    return fiterContacts;
  }
);
