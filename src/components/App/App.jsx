import { useState, useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
// import { useLocalStorage } from "hooks/useLocalStorage";
import { lightTheme, darkTheme } from "../../constants";
import { Container } from "./App.styled";
import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import { getContactsThunk } from "store/contacts/operations";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const { contacts } = useSelector((state) => state.contacts);
  const { filter } = useSelector((state) => state.filter);
  console.log(contacts);
  console.log(filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const getFilteredContacts = () => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter) ||
        contact.phone.includes(filter)
    );
  };

  const changeTheme = () => setIsDark(!isDark);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <h2>Phonebook</h2>
        <button type="button" onClick={changeTheme}>
          toggle Theme
        </button>
        <ContactForm contacts={contacts} />
        <h2>Contacts</h2>
        <Filter value={filter} />
        {contacts.length ? (
          <ContactList contacts={getFilteredContacts()} />
        ) : (
          <p>No contacts in Phonebook yet</p>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;
