import Question from "./Question";
import Answers from "./Answers";
import { useContext } from "react";
import { QuestionsAndAnswersContext } from "../contexts/QuestionsAndAnswersContext";

const Questions = () => {
  const { questionsData } = useContext(QuestionsAndAnswersContext);

  return (
    questionsData.map(datum => (
      <div key={datum.question}>
        <Question question={datum.question} />
        <Answers
          answers={datum.answers}
          selectedAnswer={datum.selectedAnswer}
          correctAnswer={datum.correctAnswer}
        />
      </div>
    ))
  );
}

export default Questions;