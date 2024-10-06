import PropTypes from "prop-types";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const SubmitButton = ({ questionsData }) => {
  const navigate = useNavigate();

  const handleOnSubmitQuiz = () => {
    navigate('/results', { state: { questionsData } })
  }

  return (
    questionsData.length !== 0 && questionsData.findIndex(item => item.selectedAnswer === null) === -1 ?
      <Button onClick={handleOnSubmitQuiz}>
        Submit
      </Button> :
      null
  )
}

SubmitButton.propTypes = {
  questionsData: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      selectedAnswer: PropTypes.string,
      correctAnswer: PropTypes.string.isRequired,
      answers: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ),
}

export default SubmitButton;