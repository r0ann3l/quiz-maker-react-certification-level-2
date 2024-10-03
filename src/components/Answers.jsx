import PropTypes from "prop-types";
import Answer from "./Answer";

const Answers = ({ answers, selectedAnswer, correctAnswer, showResults, onSelect }) => {
  return (
    answers.map(answer => (
      <Answer
        key={answer}
        answer={answer}
        selected={selectedAnswer === answer}
        correct={selectedAnswer === correctAnswer}
        showResults={showResults}
        onSelect={onSelect}
      />
    ))
  )
}

Answers.propTypes = {
  answers: PropTypes.array,
  selectedAnswer: PropTypes.string,
  correctAnswer: PropTypes.string,
  showResults: PropTypes.bool,
  onSelect: PropTypes.func,
}

export default Answers;