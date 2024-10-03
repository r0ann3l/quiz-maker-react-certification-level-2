import PropTypes from "prop-types";
import Button from "./Button";
import { useContext } from "react";
import { QuestionsAndAnswersContext } from "../contexts/QuestionsAndAnswersContext";

const Answer = ({ question, answer }) => {
  const { selectAnswer } = useContext(QuestionsAndAnswersContext);

  const handleOnClick = () => {
    selectAnswer(question, answer)
  }

  return (
    <Button onClick={handleOnClick}>
      {answer}
    </Button>
  )
}

Answer.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string
}

export default Answer;