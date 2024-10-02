import PropTypes from "prop-types";
import Select from "./Select";

const options = [
  {
    name: 'Easy',
    value: 'easy'
  },
  {
    name: 'Medium',
    value: 'medium'
  },
  {
    name: 'Hard',
    value: 'hard'
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