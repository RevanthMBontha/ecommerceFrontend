import { useState, useContext } from "react";
import {
  Button,
  CheckoutProgression,
  StepOne,
  StepThree,
  StepTwo,
} from "../components";
import CartContext from "../contexts/cartContext";

const Checkout = () => {
  // States for steps
  const [step, setStep] = useState(1);

  const { address } = useContext(CartContext);

  // Handle click function
  const handleNextClick = () => {
    if (step === 1) setStep(2);
    if (step === 2) setStep(3);
    if (step === 3) handlePlaceOrder();
  };

  const handleBackClick = () => {
    if (step === 2) setStep(1);
    if (step === 3) setStep(2);
  };

  const handlePlaceOrder = () => {
    alert("Order Placed");
  };

  return (
    <div className="flex h-fit flex-col bg-gray-200 p-4 lg:h-full lg:overflow-y-auto">
      <CheckoutProgression step={step} />
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
      <div className="my-2 flex w-full justify-between rounded-md bg-white p-4">
        <Button
          disabled={step === 1}
          style={`${step === 1 ? "text-gray-400 bg-gray-200 hover:bg-gray-200 cursor-not-allowed" : "text-white"}`}
          onClick={handleBackClick}
        >
          Back
        </Button>
        <Button
          disabled={Object.entries(address).length === 0}
          style={`${Object.keys(address).length === 0 ? "text-gray-400 bg-gray-200 hover:bg-gray-200 cursor-not-allowed" : "text-white"}`}
          onClick={handleNextClick}
        >
          {step === 3 ? "Place Order" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
