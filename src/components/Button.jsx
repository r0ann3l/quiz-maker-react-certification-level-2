import PropTypes from "prop-types";

const Button = ({ id, children, onClick = () => { }, ...props }) => {
  return (
    <button id={id} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  id: PropTypes.string
}

export default Button;