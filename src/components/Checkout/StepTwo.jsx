import { useState } from "react";
import { deliveryOptions } from "../../utils/deliveryOptions";
import DeliveryOptions from "./DeliveryOptions";
import DeliveryDetails from "./DeliveryDetails";

const StepTwo = () => {
  const [deliveryOption, setDeliveryOption] = useState(deliveryOptions[0].id);

  return (
    <div
      className="grid h-full grid-cols-1 rounded-md bg-white p-2 lg:grid-cols-2 lg:overflow-y-auto
    "
    >
      {/* Delivery Options Column */}
      <div className="flex flex-col p-2 lg:overflow-y-auto lg:border-r lg:border-solid lg:border-gray-200">
        {/* Container for the Delivery Options Header */}
        <div>
          <h1 className="text-xl font-semibold">Delivery Options</h1>
          <hr className="mx-auto my-2 w-5/6 border-t border-gray-300" />
        </div>
        {/* Container for Delivery Options */}
        <div className="flex flex-1 flex-col gap-y-3 rounded-md bg-gray-200 p-2 lg:overflow-y-auto">
          {deliveryOptions.map((option) => (
            <DeliveryOptions
              key={option.id}
              options={option}
              select={deliveryOption}
              setSelect={setDeliveryOption}
            />
          ))}
        </div>
      </div>
      {/* Delivery Options Column */}
      <div
        className="flex flex-col p-2 lg:overflow-y-auto 
      lg:border-l lg:border-solid lg:border-gray-200"
      >
        {/* Container for Delivery Details Header */}
        <div>
          <h1 className="text-xl font-semibold">Delivery Details</h1>
          <hr className="mx-auto my-2 w-5/6 border-t border-gray-300" />
        </div>
        {/* Container for Delivery Details Component */}
        <div className="flex-1 rounded-md bg-gray-200 p-2 lg:overflow-y-auto">
          <DeliveryDetails
            options={deliveryOptions}
            deliveryOptionId={deliveryOption}
          />
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
