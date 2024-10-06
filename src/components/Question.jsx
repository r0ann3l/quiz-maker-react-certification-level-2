import PropTypes from "prop-types";
import he from 'he';

const Question = ({ question }) => {
  return (
    <h4 className="question">
      {he.decode(question)}
    </h4>
  );
}

Question.propTypes = {
  question: PropTypes.string
}

export default Question;