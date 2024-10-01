import PropTypes from "prop-types";

const Select = ({ options, selected, onSelect }) => {
  const handleOnChange = (event) => {
    onSelect(event.target.value);
  }

  return (
    <select onChange={handleOnChange} value={selected}>
      {
        (options || []).map(option => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))
      }
    </select>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
  selected: PropTypes.number,
  onSelect: PropTypes.func.isRequired
}

export default Select;