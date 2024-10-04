import PropTypes from "prop-types";
import Button from "./Button";

const Answer = ({ answer, selected, correct, showResults, onSelect }) => {

  const handleOnClick = () => {
    onSelect(answer)
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
  answer: PropTypes.string,
  selected: PropTypes.bool,
  correct: PropTypes.bool,
  showResults: PropTypes.bool,
  onSelect: PropTypes.func,
}

export default Answer;