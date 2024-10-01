import PropTypes from "prop-types";
import Select from "./Select";
import useCategoryRequest from "../hooks/useCategoryRequest";

const CategorySelect = ({ selected, onSelect }) => {

  const { result } = useCategoryRequest();

  const options = result.map(option => ({
    value: option.id,
    name: option.name
  }));

  return (
    <Select
      onSelect={onSelect}
      options={options}
      selected={selected}
    />
  );
}

CategorySelect.propTypes = {
  selected: PropTypes.number,
  onSelect: PropTypes.func.isRequired
}

export default CategorySelect;