import { Link } from "react-router-dom";

const NewQuizButton = () => {
  return (
    <Link id="new-quiz-button" to={'/'} >
      Create a new quiz
    </Link>
  );
}

export default NewQuizButton;