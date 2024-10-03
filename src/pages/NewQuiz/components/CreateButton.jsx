import PropTypes from "prop-types";
import Button from "../../../components/Button";

const CreateButton = ({ onClick }) => {
  return (
    <Button id="createBtn" onClick={onClick}>
      Create
    </Button>
  );
}

CreateButton.propTypes = {
  onClick: PropTypes.func
}

export default CreateButton;