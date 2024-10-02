import PropTypes from "prop-types";
import Select from "./Select";

const options = [
  {
    name: 'easy',
    value: 'Easy'
  },
  {
    name: 'medium',
    value: 'Medium'
  },
  {
    name: 'hard',
    value: 'Hard'
  }
];

const DifficultySelect = ({ selected, onSelect }) => {
  return (
    <Select
      id="difficultySelect"
      onSelect={onSelect}
      options={options}
      selected={selected}
      emptyOption='Select difficulty'
    />
  );
}

DifficultySelect.propTypes = {
  selected: PropTypes.string,
  onSelect: PropTypes.func.isRequired
}

export default DifficultySelect;