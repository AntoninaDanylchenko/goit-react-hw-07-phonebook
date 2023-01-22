export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = state => {
  const fiterContacts = state.filter
    ? state.contacts.items.filter(contact =>
        contact.name.toLowerCase().includes(state.filter)
      )
    : state.contacts.items;

  return fiterContacts;
};
