import { useContext } from "react";
import SubmitButton from "../components/SubmitButton";
import ActionsSection from "../../../sections/ActionsSection";
import { NewQuizContext } from "../contexts/NewQuizContext";

const Actions = () => {
  const { questionsData } = useContext(NewQuizContext);

  return (
    <ActionsSection>
      <SubmitButton questionsData={questionsData} />
    </ActionsSection>
  );
}

export default Actions;