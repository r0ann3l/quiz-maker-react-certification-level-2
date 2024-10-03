import PropTypes from "prop-types";
import Button from "./Button";
import { useContext } from "react";
import { QuestionsAndAnswersContext } from "../contexts/QuestionsAndAnswersContext";

const Answer = ({ question, answer, selected, correct, showResults }) => {
  const { selectAnswer } = useContext(QuestionsAndAnswersContext);

  const handleOnClick = () => {
    selectAnswer(question, answer)
  }

  const getClassName = () => {
    if (selected) {
      if (!showResults) {
        return 'selected';
      }

      return correct ? 'correct' : 'incorrect';
    }

    if (showResults && correct) {
      return 'correct';
    }

    return '';
  }

  return (
    <Button className={getClassName()} onClick={handleOnClick}>
      {answer}
    </Button>
  )
}

Answer.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  selected: PropTypes.bool,
  correct: PropTypes.bool,
  showResults: PropTypes.bool,
}

export default Answer;