import PageTitle from "../../components/PageTitle";
import Actions from "./sections/Actions";
import AnsweredQuestions from "./sections/AnsweredQuestions";
import ResultsContextProvider from "./contexts/ResultsContext";

const Results = () => {
  return (
    <>
      <header>
        <PageTitle title='RESULTS' />
      </header>

      <ResultsContextProvider>
        <main>
          <AnsweredQuestions />

          <Actions />
        </main>
      </ResultsContextProvider>
    </>
  );
}

export default Results;