import PropTypes from "prop-types";

const Form = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.any,
  onSubmit: PropTypes.func.isRequired
}

export default Form;