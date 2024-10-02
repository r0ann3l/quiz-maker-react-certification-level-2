import PropTypes from "prop-types";
import Question from "./Question";
import Answers from "./Answers";
import { randomizeAnswers } from "../utils/answers";

const Questions = ({ questions }) => {
  return (
    (questions || []).map(question => (
      <div key={question.question}>
        <Question question={question.question} />
        <Answers
          answers={randomizeAnswers([question.correct_answer, ...question.incorrect_answers])}
        />
      </div>
    ))
  );
}

Questions.propTypes = {
  questions: PropTypes.array,
}

export default Questions;