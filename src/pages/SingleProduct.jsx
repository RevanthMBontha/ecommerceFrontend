import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { FaRegCircle } from "react-icons/fa";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import { Button, Gender, Loading, Quantity, Ratings } from "../components";
import { Error } from "../pages";
import CartContext from "../contexts/cartContext";
import { toast } from "react-toastify";

const URL = "http://127.0.01:5050/api/v1/products";

const SingleProduct = () => {
  const location = useLocation();
  const productID = location.pathname.split("/")[2];

  const productURL = URL + `/${productID}`;

  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const { cart, setCart } = useContext(CartContext);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["singleProduct"],
    queryFn: async () => {
      const response = await axios.get(productURL);
      return response.data.data.product;
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isPending) return <Loading />;

  if (isError) return <Error error={error} />;

  const isInCart =
    cart.length > 0
      ? cart.filter((item) => item.id === data._id).length > 0
      : false;

  return (
    <div className="bg-gray-200">
      <div className="mx-auto grid h-fit w-full grid-cols-1 p-4 lg:grid-cols-2">
        {/* Image */}
        <div className="mx-auto h-fit w-2/3 rounded-md lg:ml-auto lg:mr-4">
          <Carousel
            autoPlay
            interval={2000}
            showStatus={false}
            infiniteLoop={true}
          >
            <div>
              <img
                className="rounded-md"
                src={data.imageCover}
                alt={data.name}
              />
            </div>
            {data.images.map((image, index) => (
              <div className="custom-shadow" key={index}>
                <img className="rounded-md" src={image} alt={index} />
              </div>
            ))}
          </Carousel>
        </div>
        {/* Details */}
        <div className="mx-auto flex h-full w-2/3 flex-col items-center gap-y-8 p-2 pl-4 lg:mx-0 lg:mr-auto lg:items-start lg:justify-start lg:gap-y-8">
          <h1 className="text-3xl font-semibold capitalize">{data.name}</h1>
          <div className="custom-shadow w-full rounded-md bg-white p-4 text-center font-thin capitalize italic text-blue-400">
            {`"${data.quote}"`}
          </div>
          <p className="flex items-center text-xl font-semibold">
            For: <Gender gender={data.gender} />
          </p>
          <p className="flex items-center text-xl font-semibold capitalize">
            Category: {data.category}
          </p>
          <p className="flex items-center text-xl font-semibold">
            Rating: <Ratings rating={data.rating} reviews={data.reviews} />
          </p>
          <p className="flex items-center text-xl font-semibold capitalize">
            Price per unit: USD {data.price}.00
          </p>
          <p className="text-xl font-semibold capitalize">
            Quantity:
            <Quantity
              decreaseDisabled={quantity <= 1}
              increaseDisabled={quantity >= data.inStock}
              value={quantity}
              decreaseQuantity={decreaseQuantity}
              increaseQuantity={increaseQuantity}
            />
          </p>
        </div>
      </div>
      {/* Key-Points */}
      <div className="custom-shadow mx-auto my-4 w-2/3 rounded-md bg-white p-4">
        <p className="text-xl font-semibold capitalize">Key Points</p>
        {data.keyPoints.map((point, index) => (
          <p className="my-2 flex font-thin" key={index}>
            <span className="mr-2 mt-2 flex items-start justify-center lg:mt-0 lg:items-center">
              {<FaRegCircle size={8} />}
            </span>
            {` ${point}`}
          </p>
        ))}
      </div>
      {/* Price Total and Add to Cart Button */}
      <div className="mx-auto my-12 flex w-2/3">
        <p className="my-auto flex-grow-0 p-4 text-2xl font-semibold italic">{`Total: USD. ${data.price * quantity}.00`}</p>
        <div className="flex-grow p-4">
          <Button
            disabled={isInCart}
            onClick={() => {
              setCart([
                ...cart,
                {
                  id: data._id,
                  quantity: quantity,
                  name: data.name,
                  img: data.imageCover,
                  quote: data.quote,
                  price: data.price,
                  inStock: data.inStock,
                },
              ]);
              toast.success("Product added to cart!");
            }}
            style={
              isInCart
                ? "w-full p-2 flex justify-center text-white text-xl border-orange-400 border border-solid bg-transparent text-orange-400 hover:border-orange-400 hover:text-orange-400 hover:bg-transparent cursor-not-allowed"
                : "w-full p-2 flex justify-center text-white text-xl"
            }
          >
            {isInCart ? "Already added to cart!" : "Add to Cart!"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
