import PropTypes from "prop-types";
import Answer from "./Answer";

const Answers = ({ answers }) => {
  return (
    (answers || []).map(answer => (
      <Answer key={answer} answer={answer} />
    ))
  )
}

Answers.propTypes = {
  answers: PropTypes.array,
}

export default Answers;