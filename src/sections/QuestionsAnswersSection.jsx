import PropTypes from "prop-types";

const QuestionsAnswersSection = ({ children }) => {
  return (
    <section id="questions-answers">
      {children}
    </section>
  );
}

QuestionsAnswersSection.propTypes = {
  children: PropTypes.any
}

export default QuestionsAnswersSection;