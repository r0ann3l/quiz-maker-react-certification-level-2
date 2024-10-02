import PropTypes from "prop-types";

const Form = ({ children, onSubmit }) => {

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={handleOnSubmit}>
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.any,
  onSubmit: PropTypes.func.isRequired
}

export default Form;