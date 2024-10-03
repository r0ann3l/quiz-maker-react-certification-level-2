import PropTypes from "prop-types";
import Select from "../../../components/Select";
import useCategoryRequest from "../../../hooks/useCategoryRequest";
import LoadingIndicator from "../../../components/LoadingIndicator";

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
        id="categorySelect"
        onSelect={onSelect}
        options={options}
        selected={selected}
        emptyOption='Select category'
      />
  );
}

CategorySelect.propTypes = {
  selected: PropTypes.number,
  onSelect: PropTypes.func.isRequired
}

export default CategorySelect;