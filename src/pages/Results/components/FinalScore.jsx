import { useContext } from "react";
import classNames from "classnames";
import { ResultsContext } from "../contexts/ResultsContext";

const FinalScore = () => {
  const { questionsData } = useContext(ResultsContext);

  const totalQuestions = questionsData.length;

  const totalCorrectAnswers = questionsData.filter(item => item.selectedAnswer === item.correctAnswer).length;

  return (
    <p
      id='final-score'
      className={classNames({
        'bad-score': totalCorrectAnswers < 2,
        'good-score': totalCorrectAnswers > 3,
        'regular-score': totalCorrectAnswers >= 2 && totalCorrectAnswers <= 3
      })}
    >
      You scored {totalCorrectAnswers} out of {totalQuestions}
    </p>
  );
}

export default FinalScore;