import PropTypes from "prop-types";
import classNames from "classnames";

const FinalScore = ({ correctAnswers, totalQuestions }) => {
  return (
    <p
      id='final-score'
      className={classNames({
        'bad-score': correctAnswers < 2,
        'good-score': correctAnswers > 3,
        'regular-score': correctAnswers >= 2 && correctAnswers <= 3
      })}
    >
      You scored {correctAnswers} out of {totalQuestions}
    </p>
  );
}

FinalScore.propTypes = {
  correctAnswers: PropTypes.number,
  totalQuestions: PropTypes.number
}

export default FinalScore;