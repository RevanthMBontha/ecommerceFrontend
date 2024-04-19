import { useNavigate } from "react-router-dom";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import axios from "axios";
import Loading from "../Loading";
import { useContext } from "react";
import CartContext from "../../contexts/cartContext";

const createOrderURL = "http://127.0.01:5050/api/v1/user/orders";

const PayPalPaymentDetails = () => {
  const { setCart, address, taxAmount, deliveryFee } = useContext(CartContext);
  const [{ isPending }] = usePayPalScriptReducer();

  if (localStorage.getItem("__paypal_storage__") !== null)
    localStorage.removeItem("__paypal_storage__");

  const navigate = useNavigate();

  return (
    <div className="rounded-md bg-white p-4">
      {isPending ? (
        <Loading />
      ) : (
        <PayPalButtons
          style={{
            shape: "pill",
            layout: "vertical",
          }}
          createOrder={async () => {
            try {
              const response = await axios.post(
                createOrderURL,
                {
                  address: address,
                  cart: JSON.parse(localStorage.getItem("cart")),
                  tax: taxAmount,
                  deliveryFee: deliveryFee,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                },
              );

              const orderData = response.data;

              if (orderData.id) {
                return orderData.id;
              } else {
                const errorDetail = orderData?.details?.[0];
                const errorMessage = errorDetail
                  ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                  : JSON.stringify(orderData);

                throw new Error(errorMessage);
              }
            } catch (error) {
              console.error(error);
            }
          }}
          onApprove={async (data, actions) => {
            try {
              const response = await axios.post(
                `http://127.0.01:5050/api/v1/user/orders/${data.orderID}/capture`,
                null,
              );

              const orderData = response.data;
              // Three cases to handle:
              //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
              //   (2) Other non-recoverable errors -> Show a failure message
              //   (3) Successful transaction -> Show confirmation or thank you message

              const errorDetail = orderData?.details?.[0];

              if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
                return actions.restart();
              } else if (errorDetail) {
                // (2) Other non-recoverable errors -> Show a failure message
                throw new Error(
                  `${errorDetail.description} (${orderData.debug_id})`,
                );
              } else {
                // (3) Successful transaction -> Show confirmation or thank you message
                // Or go to another URL:  actions.redirect('thank_you.html');
                console.log(
                  "transaction successful. Add order entry to the database",
                );
                localStorage.removeItem("cart");
                setCart([]);
                console.log(
                  "Capture result",
                  orderData,
                  JSON.stringify(orderData, null, 2),
                );
                setTimeout(() => navigate("/orders"), 1000);
              }
            } catch (error) {
              console.error(error);
            }
          }}
        />
      )}
    </div>
  );
};

export default PayPalPaymentDetails;
