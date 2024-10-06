import PropTypes from "prop-types";
import Question from "./Question";
import Answers from "./Answers";
import LoadingIndicator from "./LoadingIndicator";

const QuestionsAndAnswers = ({
  questionsData,
  loading = false,
  showResults = false,
  onSelect = () => { }
}) => {
  return (
    loading ?
      <LoadingIndicator /> :
      questionsData.map(questionDatum => (
        <div key={questionDatum.question}>
          <Question question={questionDatum.question} />
          <Answers
            answers={questionDatum.answers}
            selectedAnswer={questionDatum.selectedAnswer}
            correctAnswer={questionDatum.correctAnswer}
            showResults={showResults}
            onSelect={(answer) => onSelect(questionDatum.question, answer)}
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
  loading: PropTypes.bool,
  showResults: PropTypes.bool,
  onSelect: PropTypes.func,
}

export default QuestionsAndAnswers;