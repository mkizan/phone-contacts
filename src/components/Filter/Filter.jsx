import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setFilter } from "store/contacts/filterSlice";

const Filter = ({ value }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <span>Find contacts by name or phone</span>
      <br />
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Filter;
