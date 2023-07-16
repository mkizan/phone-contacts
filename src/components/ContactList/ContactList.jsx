import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem";

const ContactList = ({ contacts, removeItems, updateContact }) => (
  <ul>
    {contacts.map((contact) => (
      <li key={contact.id}>
        <ContactListItem
          contact={contact}
          onDeleteItems={removeItems}
          onUpdateContact={updateContact}
        />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  removeItems: PropTypes.func.isRequired,
};

export default React.memo(ContactList);
