import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import Button from "./Button";

const Card = ({ imgSrc, title, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div className="custom-shadow mx-2 inline-block h-[550px] rounded-md bg-white">
      <div className="flex w-[400px] flex-col rounded-md bg-white">
        <img
          className="h-[400px] w-[400px] flex-grow-0 rounded-md rounded-b-none"
          src={imgSrc}
          alt="test pic"
        />
        <div className="my-2 mb-4 flex flex-col items-center gap-y-2">
          <h2 className="text-2xl font-semibold capitalize">
            {title.substring(0, 24)}...
          </h2>
          <p className="text-md font-thin capitalize">
            {desc.substring(0, 50)}...
          </p>
        </div>
        <div className="flex items-center justify-center pb-2">
          <Button
            style="text-white px-6 py-2"
            onClick={() => navigate(`/product/${id}`)}
          >
            Check it out!
          </Button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
