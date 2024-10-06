import PropTypes from "prop-types";

const Question = ({ question }) => {
  return (
    <h4 className="question">{question}</h4>
  );
}

Question.propTypes = {
  question: PropTypes.string
}

export default Question;