import PropTypes from "prop-types";

const DeliveryDetails = ({ options, deliveryOptionId }) => {
  const thisOption = options.find((option) => option.id === deliveryOptionId);
  const cart = JSON.parse(localStorage.getItem("cart"));

  const cartValue = cart
    .map((item) => item.price * item.quantity)
    .reduce((acc, cv) => acc + cv);

  return (
    <div className="rounded-md bg-white p-4">
      <h2 className="text-lg font-semibold">{thisOption.name}</h2>
      <div className="p-2">
        <p>
          Additional Delivery Fee: USD{" "}
          {deliveryOptionId === "standard" && cartValue > 1999
            ? 0
            : thisOption.deliveryFee}
          .00
        </p>
        <p>Details:</p>
        <ul className="divide-y divide-gray-200 pl-4">
          {thisOption.details.map((detail, index) => (
            <li className="py-2" key={index}>
              <p className="text-sm font-normal text-gray-900">{detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

DeliveryDetails.propTypes = {
  options: PropTypes.array.isRequired,
  deliveryOptionId: PropTypes.string.isRequired,
};

export default DeliveryDetails;
