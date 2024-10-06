import PropTypes from "prop-types";

const ErrorMessage = ({ errorMessage }) => {
  return (
    errorMessage ?
      <span className="error-message">{errorMessage}</span> :
      null
  );
}

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string
}

export default ErrorMessage;