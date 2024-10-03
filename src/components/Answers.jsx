import PropTypes from "prop-types";
import Answer from "./Answer";

const Answers = ({ answers, selectedAnswer, correctAnswer, showResults }) => {
  return (
    answers.map(answer => (
      <Answer key={answer} answer={answer} />
    ))
  )
}

Answers.propTypes = {
  answers: PropTypes.array,
  selectedAnswer: PropTypes.string,
  correctAnswer: PropTypes.string,
  showResults: PropTypes.bool,
}

export default Answers;