import { useContext } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { ImBin2 } from "react-icons/im";
import PropTypes from "prop-types";
import Button from "./Button";
import Quantity from "./Quantity";
import CartContext from "../contexts/cartContext";

const CartCard = ({ id, img, name, quote, price, quantity, inStock }) => {
  const { cart, setCart } = useContext(CartContext);

  const decrease = () => {
    setCart(decreaseQuantity(cart, id));
  };

  const increase = () => {
    setCart(increaseQuantity(cart, id));
  };

  const decreaseQuantity = (array, id) => {
    return array.map((obj) => {
      if (obj.id === id) {
        return { ...obj, quantity: quantity - 1 };
      }
      return obj;
    });
  };

  const increaseQuantity = (array, id) => {
    return array.map((obj) => {
      if (obj.id === id) {
        return { ...obj, quantity: quantity + 1 };
      }
      return obj;
    });
  };

  const handleDelete = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="custom-shadow relative w-full rounded-md bg-white p-2">
      <div className="flex flex-col gap-y-2 lg:flex-row lg:gap-x-2 lg:gap-y-0">
        <img className="h-[200px] w-[200px] rounded-md" src={img} alt={name} />
        <div className="flex w-full flex-grow flex-col justify-start gap-y-4">
          <p className="text-xl font-semibold capitalize">{name}</p>
          <p className="capitalize">{quote}</p>
          <p className="text-lg">
            Price: <span className="italic">USD {price.toFixed(2)}</span>
          </p>
          <div className="flex flex-col gap-y-2 lg:flex-row lg:justify-between lg:gap-y-0">
            <div className="flex flex-col items-end gap-x-4 gap-y-2 md:flex-row md:items-center md:gap-y-0">
              <Quantity
                decreaseDisabled={quantity <= 1}
                increaseDisabled={quantity >= inStock}
                value={quantity}
                decreaseQuantity={decrease}
                increaseQuantity={increase}
              />
              <Button style="text-white p-3" onClick={() => handleDelete(id)}>
                <ImBin2 size={18} />
              </Button>
            </div>
            <div className="flex items-center">
              <p className="mr-2 text-2xl font-semibold italic">
                USD {(price * quantity).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0">
        <Button
          style="text-orange-400 hover:text-orange-600 bg-transparent hover:bg-orange-400 hover:text-white p-1 mt-1 mr-1"
          onClick={() => handleDelete(id)}
        >
          <IoMdCloseCircleOutline size={27} />
        </Button>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  inStock: PropTypes.number.isRequired,
};

export default CartCard;
