import PropTypes from "prop-types";

const ActionsSection = ({ children }) => {
  return (
    <section id="actions">
      {children}
    </section>
  );
}

ActionsSection.propTypes = {
  children: PropTypes.node
}

export default ActionsSection;