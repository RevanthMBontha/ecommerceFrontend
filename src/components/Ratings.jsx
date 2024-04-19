import { useState } from "react";
import PropTypes from "prop-types";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const Ratings = ({ rating, reviews }) => {
  const [showRating, setShowRating] = useState(false);

  if (rating >= 4.5)
    return (
      <span
        onMouseEnter={() => setShowRating(true)}
        onMouseLeave={() => setShowRating(false)}
        className="relative ml-2 flex items-center gap-x-1"
      >
        <span className="flex items-center gap-x-1">
          <FaStar className="text-gray-900" />
          <FaStar className="text-gray-900" />
          <FaStar className="text-gray-900" />
          <FaStar className="text-gray-900" />
          <FaStarHalfAlt className="text-gray-900" />
        </span>
        <span>({reviews})</span>
        <span
          className={`${showRating ? "visible" : "hidden"} absolute bottom-7 right-10 rounded-md rounded-br-none  bg-white p-1 px-2`}
        >
          {rating}
        </span>
      </span>
    );

  if (rating >= 4)
    return (
      <span
        onMouseEnter={() => setShowRating(true)}
        onMouseLeave={() => setShowRating(false)}
        className="relative ml-2 flex items-center gap-x-1"
      >
        <span className="flex items-center gap-x-1">
          <FaStar className="text-gray-900" />
          <FaStar className="text-gray-900" />
          <FaStar className="text-gray-900" />
          <FaStar className="text-gray-900" />
          <FaRegStar className="text-gray-900" />
        </span>
        <span>({reviews})</span>
        <span
          className={`${showRating ? "visible" : "hidden"} absolute bottom-7 right-10 rounded-md rounded-br-none  bg-white p-1 px-2`}
        >
          {rating}
        </span>
      </span>
    );

  if (rating >= 3.5)
    return (
      <span
        onMouseEnter={() => setShowRating(true)}
        onMouseLeave={() => setShowRating(false)}
        className="relative ml-2 flex items-center gap-x-1"
      >
        <span className="flex items-center gap-x-1">
          <FaStar className="text-gray-900" />
          <FaStar className="text-gray-900" />
          <FaStar className="text-gray-900" />
          <FaStarHalfAlt className="text-gray-900" />
          <FaRegStar className="text-gray-900" />
        </span>
        <span>({reviews})</span>
        <span
          className={`${showRating ? "visible" : "hidden"} absolute bottom-7 right-10 rounded-md rounded-br-none  bg-white p-1 px-2`}
        >
          {rating}
        </span>
      </span>
    );

  if (rating >= 3)
    return (
      <span
        onMouseEnter={() => setShowRating(true)}
        onMouseLeave={() => setShowRating(false)}
        className="relative ml-2 flex items-center gap-x-1"
      >
        <span className="flex items-center gap-x-1">
          <FaStar className="text-gray-900" />
          <FaStar className="text-gray-900" />
          <FaStar className="text-gray-900" />
          <FaRegStar className="text-gray-900" />
          <FaRegStar className="text-gray-900" />
        </span>
        <span>({reviews})</span>
        <span
          className={`${showRating ? "visible" : "hidden"} absolute bottom-7 right-10 rounded-md rounded-br-none  bg-white p-1 px-2`}
        >
          {rating}
        </span>
      </span>
    );

  if (rating >= 2.5)
    return (
      <span
        onMouseEnter={() => setShowRating(true)}
        onMouseLeave={() => setShowRating(false)}
        className="relative ml-2 flex items-center gap-x-1"
      >
        <span className="flex items-center gap-x-1">
          <FaStar className="text-gray-900" />
          <FaStar className="text-gray-900" />
          <FaStarHalfAlt className="text-gray-900" />
          <FaRegStar className="text-gray-900" />
          <FaRegStar className="text-gray-900" />
        </span>
        <span>({reviews})</span>
        <span
          className={`${showRating ? "visible" : "hidden"} absolute bottom-7 right-10 rounded-md rounded-br-none  bg-white p-1 px-2`}
        >
          {rating}
        </span>
      </span>
    );

  if (rating >= 2)
    return (
      <span
        onMouseEnter={() => setShowRating(true)}
        onMouseLeave={() => setShowRating(false)}
        className="relative ml-2 flex items-center gap-x-1"
      >
        <span className="flex items-center gap-x-1">
          <FaStar className="text-gray-900" />
          <FaStar className="text-gray-900" />
          <FaRegStar className="text-gray-900" />
          <FaRegStar className="text-gray-900" />
          <FaRegStar className="text-gray-900" />
        </span>
        <span>({reviews})</span>
        <span
          className={`${showRating ? "visible" : "hidden"} absolute bottom-7 right-10 rounded-md rounded-br-none  bg-white p-1 px-2`}
        >
          {rating}
        </span>
      </span>
    );

  if (rating >= 1.5)
    return (
      <span
        onMouseEnter={() => setShowRating(true)}
        onMouseLeave={() => setShowRating(false)}
        className="relative ml-2 flex items-center gap-x-1"
      >
        <span className="flex items-center gap-x-1">
          <FaStar className="text-gray-900" />
          <FaStarHalfAlt className="text-gray-900" />
          <FaRegStar className="text-gray-900" />
          <FaRegStar className="text-gray-900" />
          <FaRegStar className="text-gray-900" />
        </span>
        <span>({reviews})</span>
        <span
          className={`${showRating ? "visible" : "hidden"} absolute bottom-7 right-10 rounded-md rounded-br-none  bg-white p-1 px-2`}
        >
          {rating}
        </span>
      </span>
    );

  if (rating >= 1)
    return (
      <span
        onMouseEnter={() => setShowRating(true)}
        onMouseLeave={() => setShowRating(false)}
        className="relative ml-2 flex items-center gap-x-1"
      >
        <span className="flex items-center gap-x-1">
          <FaStar className="text-gray-900" />
          <FaRegStar className="text-gray-900" />
          <FaRegStar className="text-gray-900" />
          <FaRegStar className="text-gray-900" />
          <FaRegStar className="text-gray-900" />
        </span>
        <span>({reviews})</span>
        <span
          className={`${showRating ? "visible" : "hidden"} absolute bottom-7 right-10 rounded-md rounded-br-none  bg-white p-1 px-2`}
        >
          {rating}
        </span>
      </span>
    );

  if (rating >= 0.5)
    return (
      <span
        onMouseEnter={() => setShowRating(true)}
        onMouseLeave={() => setShowRating(false)}
        className="relative ml-2 flex items-center gap-x-1"
      >
        <span className="flex items-center gap-x-1">
          <FaStarHalfAlt />
          <FaRegStar className="text-gray-900" />
          <FaRegStar className="text-gray-900" />
          <FaRegStar className="text-gray-900" />
          <FaRegStar className="text-gray-900" />
        </span>
        <span>({reviews})</span>
        <span
          className={`${showRating ? "visible" : "hidden"} absolute bottom-7 right-10 rounded-md rounded-br-none  bg-white p-1 px-2`}
        >
          {rating}
        </span>
      </span>
    );

  if (rating >= 0)
    return (
      <span
        onMouseEnter={() => setShowRating(true)}
        onMouseLeave={() => setShowRating(false)}
        className="relative ml-2 flex items-center gap-x-1"
      >
        <span className="flex items-center gap-x-1">
          <FaRegStar className="text-gray-900" />
          <FaRegStar className="text-gray-900" />
          <FaRegStar className="text-gray-900" />
          <FaRegStar className="text-gray-900" />
          <FaRegStar className="text-gray-900" />
        </span>
        <span>({reviews})</span>
        <span
          className={`${showRating ? "visible" : "hidden"} absolute bottom-7 right-10 rounded-md rounded-br-none  bg-white p-1 px-2`}
        >
          {rating}
        </span>
      </span>
    );
};

Ratings.propTypes = {
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
};

export default Ratings;
