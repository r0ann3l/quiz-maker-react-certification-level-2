import PageTitle from "../../components/PageTitle";
import Filters from "./sections/Filters";
import Actions from "./sections/Actions";
import AnswersSelection from "./sections/AnswersSelection";
import NewQuizContextProvider from "./contexts/NewQuizContext";

const NewQuiz = () => {
  return (
    <>
      <header>
        <PageTitle title='QUIZ MAKER' />
      </header>

      <NewQuizContextProvider>
        <main>
          <Filters />

          <AnswersSelection />

          <Actions />
        </main>
      </NewQuizContextProvider>
    </>
  )
}

export default NewQuiz;