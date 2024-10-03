import PropTypes from "prop-types";
import Question from "./Question";
import Answers from "./Answers";

const QuestionsAndAnswers = ({ questionsData, showResults = false, onSelect = () => { } }) => {
  return (
    questionsData.map(datum => (
      <div key={datum.question}>
        <Question question={datum.question} />
        <Answers
          answers={datum.answers}
          selectedAnswer={datum.selectedAnswer}
          correctAnswer={datum.correctAnswer}
          showResults={showResults}
          onSelect={(answer) => onSelect(datum.question, answer)}
        />
      </div>
    ))
  );
}

QuestionsAndAnswers.propTypes = {
  questionsData: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      selectedAnswer: PropTypes.string,
      correctAnswer: PropTypes.string.isRequired,
      answers: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ),
  showResults: PropTypes.bool,
  onSelect: PropTypes.func,
}

export default QuestionsAndAnswers;