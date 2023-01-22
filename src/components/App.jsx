// import { useState } from 'react';
import Section from './Section/Section';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import Search from './Search/Search';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContact } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selector';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <Section title="Phonebook">
        <Phonebook />
      </Section>
      {isLoading && !error && <b>Request in progress...</b>}
      <Section title="Contacts">
        <Search />
        <Contacts />
      </Section>
    </div>
  );
};

export default App;
