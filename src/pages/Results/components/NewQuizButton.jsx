import { Link } from "react-router-dom";

const NewQuizButton = () => {
  return (
    <Link to={'/'} id="new-quiz-button" >
      Create a new quiz
    </Link>
  );
}

export default NewQuizButton;