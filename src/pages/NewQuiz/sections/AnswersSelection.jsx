import { useContext } from "react";
import QuestionsAndAnswers from "../../../components/QuestionsAndAnswers";
import QuestionsAnswersSection from "../../../sections/QuestionsAnswersSection";
import { NewQuizContext } from "../contexts/NewQuizContext";

const AnswersSelection = () => {
  const { questionsData, selectAnswer, loadingQuestions } = useContext(NewQuizContext);

  return (
    <QuestionsAnswersSection>
      <QuestionsAndAnswers
        questionsData={questionsData}
        onSelect={selectAnswer}
        loading={loadingQuestions}
      />
    </QuestionsAnswersSection>
  )
}

export default AnswersSelection;