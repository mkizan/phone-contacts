import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContactThunk } from "store/contacts/operations";

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteContactThunk(contact.id));

  return (
    <>
      <span>
        {contact.name}: {contact.phone}
      </span>
      <button type="button" onClick={handleDeleteContact}>
        Delete
      </button>
    </>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};

export default ContactListItem;
