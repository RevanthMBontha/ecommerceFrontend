import PropTypes from "prop-types";

const PayPalPaymentOption = ({ paymentOption, setPaymentOption }) => {
  return (
    <div className="flex items-center rounded-md bg-white p-4">
      <div className="p-1">
        <input
          type="radio"
          name="icon"
          id="icon"
          checked={paymentOption === "paypal"}
          onChange={() => setPaymentOption("paypal")}
        />
      </div>
      <div className="">
        <h2 className="font-lg font-semibold">Pay using PayPal</h2>
      </div>
    </div>
  );
};

PayPalPaymentOption.propTypes = {
  paymentOption: PropTypes.string.isRequired,
  setPaymentOption: PropTypes.func.isRequired,
};

PayPalPaymentOption.defaultProps = {
  paymentOption: "",
};

export default PayPalPaymentOption;
