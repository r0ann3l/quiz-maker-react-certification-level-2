import PropTypes from "prop-types";
import Answer from "./Answer";

const Answers = ({ answers, selectedAnswer, correctAnswer, showResults, onSelect }) => {
  return (
    <div className="answers">
      {
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
      }
    </div>
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