import PropTypes from "prop-types";
import Answer from "./Answer";

const Answers = ({ answers, selectedAnswer, correctAnswer, showResults }) => {
  return (
    answers.map(answer => (
      <Answer
        key={answer}
        answer={answer}
        selected={selectedAnswer === answer}
        correct={selectedAnswer === correctAnswer}
        showResults={showResults}
      />
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