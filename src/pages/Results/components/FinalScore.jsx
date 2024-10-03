import PropTypes from "prop-types";

const FinalScore = ({ correctAnswers, totalQuestions }) => {
  const getClassName = () => {
    if (correctAnswers < 2) {
      return 'bad-score';
    }

    if (correctAnswers > 3) {
      return 'good-score';
    }

    return 'regular-score';
  }

  return (
    <p className={getClassName()}>
      You scored {correctAnswers} out of {totalQuestions}
    </p>
  );
}

FinalScore.propTypes = {
  correctAnswers: PropTypes.number,
  totalQuestions: PropTypes.number
}

export default FinalScore;