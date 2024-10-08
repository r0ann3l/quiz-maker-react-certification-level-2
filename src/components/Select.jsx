import PropTypes from "prop-types";

const Select = ({ id, options, selected, onSelect, emptyOption, emptyOptionValue = 0 }) => {
  const handleOnChange = (event) => {
    onSelect(event.target.value);
  }

  return (
    <select id={id} onChange={handleOnChange} value={selected}>
      {
        emptyOption ?
          <option value={emptyOptionValue}>{emptyOption}</option> :
          null
      }
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
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.string,
    })
  ).isRequired,
  selected: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onSelect: PropTypes.func.isRequired,
  emptyOption: PropTypes.string,
  emptyOptionValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  id: PropTypes.string.isRequired
}

export default Select;