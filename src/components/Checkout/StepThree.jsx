import { useState } from "react";
import PayPalPaymentOption from "./PayPalPaymentOption";
import PayPalPaymentDetails from "./PayPalPaymentDetails";

const StepThree = () => {
  const [paymentOption, setPaymentOption] = useState("");
  return (
    <div
      className="grid h-full grid-cols-1 rounded-md bg-white p-2 lg:grid-cols-2 lg:overflow-y-auto
    "
    >
      {/* Payment Options Column */}
      <div className="flex flex-col p-2 lg:overflow-y-auto lg:border-r lg:border-solid lg:border-gray-200">
        {/* Container for the Payment Options Header */}
        <div>
          <h1 className="text-xl font-semibold">Payment Options</h1>
          <hr className="mx-auto my-2 w-5/6 border-t border-gray-300" />
        </div>
        {/* Container for Payment Options */}
        <div className="flex flex-1 flex-col gap-y-3 rounded-md bg-gray-200 p-2 lg:overflow-y-auto">
          <PayPalPaymentOption
            paymentOption={paymentOption}
            setPaymentOption={setPaymentOption}
          />
        </div>
      </div>
      {/* Payment Options Column */}
      <div
        className="flex flex-col p-2 lg:overflow-y-auto 
      lg:border-l lg:border-solid lg:border-gray-200"
      >
        {/* Container for Payment Details Header */}
        <div>
          <h1 className="text-xl font-semibold">Payment Details</h1>
          <hr className="mx-auto my-2 w-5/6 border-t border-gray-300" />
        </div>
        {/* Container for Payment Details Component */}
        <div className="flex-1 rounded-md bg-gray-200 p-2 lg:overflow-y-auto">
          {paymentOption === "paypal" && <PayPalPaymentDetails />}
        </div>
      </div>
    </div>
  );
};

export default StepThree;
