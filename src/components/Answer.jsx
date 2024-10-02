import PropTypes from "prop-types";
import Button from "./Button";

const Answer = ({ answer, onClick }) => {
  return (
    <Button onClick={onClick}>
      {answer}
    </Button>
  )
}

Answer.propTypes = {
  answer: PropTypes.string,
  onClick: PropTypes.func
}

export default Answer;