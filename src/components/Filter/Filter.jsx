import PropTypes from "prop-types";

const Filter = ({ value, onChangeFilter }) => (
  <div>
    <span>Find contacts by name or phone</span>
    <br />
    <input type="text" value={value} onChange={onChangeFilter} />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
