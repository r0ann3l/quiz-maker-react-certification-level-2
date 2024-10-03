import PropTypes from "prop-types";
import Button from "../../../components/Button";

const SubmitButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      Submit
    </Button>
  )
}

SubmitButton.propTypes = {
  onClick: PropTypes.func,
}

export default SubmitButton;