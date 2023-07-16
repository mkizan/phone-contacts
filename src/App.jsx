import { useState } from "react";
import { useLocalStorage } from "hooks/useLocalStorage";
import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";

import Filter from "components/Filter";
import * as API from "./services/api";

export const App = () => {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [filter, setFilter] = useState("");

  // local create contact
  // const addContact = async (values) => {
  //   const contact = {
  //     id: nanoid(),
  //     name: values.name,
  //     number: values.number,
  //   };

  //   setContacts((state) => [contact, ...state]);
  // };

  // const deleteContact = (id) => {
  //   setContacts((state) => state.filter((contact) => contact.id !== id));
  // };

  const addContact = async (values) => {
    try {
      const contact = await API.addContact(values);
      setContacts((state) => [contact, ...state]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await API.deleteContact(id);
      setContacts((state) => state.filter((contact) => contact.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  // const fetchContacts = async () => {
  //   try {
  //     const fetchedContacts = await API.getContacts();
  //     setContacts(fetchedContacts);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter) ||
        contact.phone.includes(filter)
    );
  };

  const updateContact = (fields) => {
    setContacts((state) =>
      state.map((contact) => (contact.id === fields.id ? fields : contact))
    );
  };

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm contacts={contacts} onSubmitForm={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChangeFilter={handleChangeFilter} />
      {contacts.length ? (
        <ContactList
          contacts={getFilteredContacts()}
          removeItems={deleteContact}
          updateContact={updateContact}
        />
      ) : (
        <p>No contacts in Phonebook yet</p>
      )}
    </>
  );
};
