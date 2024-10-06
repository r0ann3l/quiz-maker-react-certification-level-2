import { useLocation } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import QuestionsAndAnswers from "../../components/QuestionsAndAnswers";
import FinalScore from "./components/FinalScore";
import NewQuizButton from "./components/NewQuizButton";
import EmptyResults from "./components/EmptyResults";

const Results = () => {
  const { state } = useLocation();
  const questionsData = state?.questionsData;

  const totalQuestions = () => {
    return questionsData.length;
  }

  const totalCorrectAnswers = () => {
    return questionsData.filter(item => item.selectedAnswer === item.correctAnswer).length;
  }

  return (
    <>
      <header>
        <PageTitle title='RESULTS' />
      </header>

      <main>
        <section id="questions-answers">
          {
            questionsData ?
              <QuestionsAndAnswers questionsData={questionsData} showResults /> :
              <EmptyResults />
          }
        </section>

        <section id="actions">
          {
            questionsData ?
              <FinalScore totalQuestions={totalQuestions()} correctAnswers={totalCorrectAnswers()} /> :
              null
          }
          <NewQuizButton />
        </section>
      </main>
    </>
  );
}

export default Results;