import PropTypes from "prop-types";

const CheckoutProgression = ({ step }) => {
  return (
    <div className="mb-4 flex rounded-md bg-white p-4">
      {/* First Step */}
      <div className="relative flex w-1/3 items-center justify-end py-4">
        <div className="w-1/2">
          <hr
            className={`w-full border-b-2 border-solid ${step === 1 ? "border-orange-400" : "border-gray-400"}`}
          />
        </div>
        {/* Circle */}
        <div
          className={`absolute left-1/2 top-1/2 flex h-[48px] w-[48px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-solid  ${step === 1 ? "border-orange-400 bg-orange-200 text-orange-400" : "border-gray-400 bg-gray-200 text-gray-400"}`}
        >
          1
        </div>
      </div>
      {/* Second Step */}
      <div className="relative flex w-1/3 items-center justify-center py-4">
        <div className="w-full">
          <hr
            className={`w-full border-b-2 border-solid ${step === 2 ? "border-orange-400" : "border-gray-400"}`}
          />
        </div>
        {/* Circle */}
        <div
          className={`absolute left-1/2 top-1/2 flex h-[48px] w-[48px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-solid  ${step === 2 ? "border-orange-400 bg-orange-200 text-orange-400" : "border-gray-400 bg-gray-200 text-gray-400"}`}
        >
          2
        </div>
      </div>

      {/* Third Step */}
      <div className="relative flex w-1/3 items-center justify-start">
        <div className="w-1/2">
          <hr
            className={`w-full border-b-2 border-solid ${step === 3 ? "border-orange-400" : "border-gray-400"}`}
          />
        </div>
        {/* Circle */}
        <div
          className={`absolute left-1/2 top-1/2 flex h-[48px] w-[48px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-solid  ${step === 3 ? "border-orange-400 bg-orange-200 text-orange-400" : "border-gray-400 bg-gray-200 text-gray-400"}`}
        >
          3
        </div>
      </div>
    </div>
  );
};

CheckoutProgression.propTypes = {
  step: PropTypes.number.isRequired,
};

export default CheckoutProgression;
