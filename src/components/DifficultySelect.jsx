import PropTypes from "prop-types";
import Select from "./Select";

const options = [
  {
    name: 1,
    value: 'Easy'
  },
  {
    name: 2,
    value: 'Medium'
  },
  {
    name: 3,
    value: 'Hard'
  }
];

const DifficultySelect = ({ selected, onSelect }) => {
  return (
    <Select
      onSelect={onSelect}
      options={options}
      selected={selected}
      emptyOption='Select difficulty'
    />
  );
}

DifficultySelect.propTypes = {
  selected: PropTypes.number,
  onSelect: PropTypes.func.isRequired
}

export default DifficultySelect;