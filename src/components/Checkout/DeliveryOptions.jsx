import { useContext } from "react";
import PropTypes from "prop-types";
import { getDateAfter } from "../../utils/helperFunctions";
import CartContext from "./../../contexts/cartContext.js";

const DeliveryOptions = ({ options, select, setSelect }) => {
  const { setDeliveryFee } = useContext(CartContext);

  const cart = JSON.parse(localStorage.getItem("cart"));
  const cartValue = cart
    .map((item) => item.price * item.quantity)
    .reduce((acc, cv) => acc + cv);

  return (
    <div className="flex items-start bg-white p-4">
      <div className="flex-grow-0 p-1">
        <input
          type="radio"
          name="icon"
          id="icon"
          onChange={() => {
            setSelect(options.id);
            setDeliveryFee(
              options.id === "standard" && cartValue > 1999
                ? 0
                : options.deliveryFee,
            );
          }}
          checked={options.id === select}
        />
      </div>
      <div className="flex flex-grow flex-col gap-y-1">
        <h2 className="text-lg font-semibold">{options.name}</h2>
        <p>
          Guaranteed delivery by:{" "}
          <span className="font-semibold">{`${getDateAfter(options.deliveryIn)}`}</span>
        </p>
      </div>
    </div>
  );
};

DeliveryOptions.propTypes = {
  options: PropTypes.object.isRequired,
  select: PropTypes.string.isRequired,
  setSelect: PropTypes.func.isRequired,
};

DeliveryOptions.defaultProps = {
  options: {
    id: "",
    name: "",
    deliveryIn: 0,
    deliveryFee: 0,
    details: [],
  },
};

export default DeliveryOptions;
