import { useLocation } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import QuestionsAndAnswers from "../../components/QuestionsAndAnswers";
import FinalScore from "./components/FinalScore";
import NewQuizButton from "./components/NewQuizButton";

const Results = () => {
  let { state: { questionsData } } = useLocation();

  const totalQuestions = () => {
    return questionsData.length;
  }

  const totalCorrectAnswers = () => {
    return questionsData.filter(item => item.selectedAnswer === item.correctAnswer).length;
  }

  return (
    <>
      <PageTitle title='RESULTS' />
      <QuestionsAndAnswers questionsData={questionsData} showResults />
      <FinalScore totalQuestions={totalQuestions()} correctAnswers={totalCorrectAnswers()} />
      <NewQuizButton />
    </>
  );
}

export default Results;