import PropTypes from "prop-types";

const ContactListItem = ({ contact, onDeleteItems, onUpdateContact }) => (
  <>
    <span>
      {contact.name}: {contact.phone}
    </span>
    <button type="button" onClick={() => onDeleteItems(contact.id)}>
      Delete
    </button>
  </>
);

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
  onDeleteItems: PropTypes.func.isRequired,
};

export default ContactListItem;
