import PropTypes from "prop-types";

const Button = ({ type, children, onClick = () => { }, id }) => {
  return (
    <button id={id} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["submit"]),
  children: PropTypes.any,
  onClick: PropTypes.func,
  id: PropTypes.string.isRequired
}

export default Button;