import PropTypes from "prop-types";
import { FaMars, FaVenus, FaVenusMars } from "react-icons/fa6";

const Gender = ({ gender }) => {
  if (gender === "male")
    return (
      <span className="ml-4 flex w-fit items-center gap-x-2 rounded-md bg-blue-500 p-2 px-4 text-white">
        <FaMars size={20} />
        Men
      </span>
    );
  if (gender === "female")
    return (
      <span className="ml-4 flex w-fit items-center gap-x-2 rounded-md bg-pink-500 p-2 px-4 text-white">
        <FaVenus size={20} />
        Women
      </span>
    );
  if (gender === "unisex")
    return (
      <span className="ml-4 flex w-fit items-center gap-x-2 rounded-md bg-green-500 p-2 px-4 text-white">
        <FaVenusMars size={20} />
        Unisex
      </span>
    );
};

Gender.propTypes = {
  gender: PropTypes.string.isRequired,
};

export default Gender;
