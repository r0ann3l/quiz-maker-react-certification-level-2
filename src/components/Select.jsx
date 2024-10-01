import PropTypes from "prop-types";

const Select = ({ options, selected, onChange }) => {
  const handleOnChange = (event) => {
    onChange(event.target.value);
  }

  return (
    <select onChange={handleOnChange}>
      {
        (options || []).map(option => (
          <option key={option.value} value={option.value} selected={selected === option.value}>
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
      value: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
  selected: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default Select;