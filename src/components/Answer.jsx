import PropTypes from "prop-types";
import Button from "./Button";
import classnames from 'classnames';

const Answer = ({ answer, selected, correct, showResults, onSelect }) => {

  const handleOnClick = () => {
    onSelect(answer)
  }

  return (
    <Button
      className={
        classnames(
          {
            'selected': selected && !showResults,
            'correct': correct && showResults,
            'incorrect': selected && !correct && showResults
          }
        )}
      onClick={handleOnClick}
      disabled={showResults}
    >
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