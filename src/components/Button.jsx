import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

const Button = ({ children, style, onClick, disabled, onBlur }) => {
  const buttonStyle = twMerge(
    "flex h-fit py-1 px-4 rounded-md bg-orange-400 hover:bg-orange-600 cursor-pointer",
    style,
  );
  return (
    <button
      onBlur={onBlur}
      disabled={disabled}
      className={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
