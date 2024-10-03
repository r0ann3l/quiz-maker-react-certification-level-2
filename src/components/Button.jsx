import PropTypes from "prop-types";

const Button = ({ id, type, children, onClick = () => { }, ...props }) => {
  return (
    <button id={id} type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["submit"]),
  children: PropTypes.any,
  onClick: PropTypes.func,
  id: PropTypes.string
}

export default Button;