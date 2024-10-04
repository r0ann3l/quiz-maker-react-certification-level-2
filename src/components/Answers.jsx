import PropTypes from "prop-types";
import Answer from "./Answer";

const Answers = ({ answers, selectedAnswer, correctAnswer, showResults, onSelect }) => {
  console.log('asdasd', selectedAnswer, correctAnswer, answers)
  return (
    answers.map(answer => (
      <Answer
        key={answer}
        answer={answer}
        selected={selectedAnswer === answer}
        correct={correctAnswer === answer}
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