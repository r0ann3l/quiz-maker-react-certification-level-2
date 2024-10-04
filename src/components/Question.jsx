import PropTypes from "prop-types";

const Question = ({ question }) => {
  return (
    <span className="question">{question}</span>
  );
}

Question.propTypes = {
  question: PropTypes.string
}

export default Question;