import { useContext } from "react";
import FinalScore from "../components/FinalScore";
import NewQuizButton from "../components/NewQuizButton";
import ActionsSection from "../../../sections/ActionsSection";
import { ResultsContext } from "../contexts/ResultsContext";

const Actions = () => {
  const { questionsData } = useContext(ResultsContext);

  return (
    <ActionsSection>
      {questionsData ? <FinalScore /> : null}
      
      <NewQuizButton />
    </ActionsSection>
  );
}

export default Actions;