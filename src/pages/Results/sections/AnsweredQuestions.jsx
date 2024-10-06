import { useContext } from "react";
import QuestionsAndAnswers from "../../../components/QuestionsAndAnswers";
import EmptyResults from "../components/EmptyResults";
import QuestionsAnswersSection from "../../../sections/QuestionsAnswersSection";
import { ResultsContext } from "../contexts/ResultsContext";

const AnsweredQuestions = () => {
  const { questionsData } = useContext(ResultsContext);

  return (
    <QuestionsAnswersSection>
      {
        questionsData ?
          <QuestionsAndAnswers questionsData={questionsData} showResults /> :
          <EmptyResults />
      }
    </QuestionsAnswersSection>
  )
}

export default AnsweredQuestions;