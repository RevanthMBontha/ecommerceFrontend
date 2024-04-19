import PropTypes from "prop-types";

import { FaMinus, FaPlus } from "react-icons/fa";

import Button from "./Button";

const Quantity = ({
  decreaseDisabled,
  increaseDisabled,
  value,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <span className="flex">
      <Button
        onClick={decreaseQuantity}
        disabled={decreaseDisabled}
        style={
          decreaseDisabled
            ? "bg-gray-400 hover:bg-gray-400 text-black rounded-r-none p-3"
            : "text-white text-xl rounded-r-none p-3"
        }
      >
        <FaMinus size={18} />
      </Button>
      <input
        className="w-[100px] border-b border-t border-solid bg-white text-center"
        type="text"
        value={value}
        disabled
      />
      <Button
        onClick={increaseQuantity}
        disabled={increaseDisabled}
        style={
          increaseDisabled
            ? "bg-gray-400 hover:bg-gray-400 text-black rounded-l-none p-3"
            : "text-white text-xl rounded-l-none p-3"
        }
      >
        <FaPlus size={18} />
      </Button>
    </span>
  );
};

Quantity.propTypes = {
  decreaseDisabled: PropTypes.bool,
  increaseDisabled: PropTypes.bool,
  value: PropTypes.number.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
};

Quantity.defaultPropTypes = {};

export default Quantity;
