import PropTypes from "prop-types";
import Select from "./Select";
import useCategoryRequest from "../hooks/useCategoryRequest";
import LoadingIndicator from "./LoadingIndicator";

const CategorySelect = ({ selected, onSelect }) => {

  const { result, loading } = useCategoryRequest();

  const options = result.map(option => ({
    value: option.id,
    name: option.name
  }));

  return (
    loading ?
      <LoadingIndicator /> :
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