import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem";

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <ContactListItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default React.memo(ContactList);
