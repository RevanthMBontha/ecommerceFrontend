import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { pageDetails } from "../utils/pageDetails";
import { Button, CartCard } from "../components";
import CartContext from "../contexts/cartContext";

const EmptyCart = () => {
  return (
    <div className="custom-shadow relative w-full rounded-md bg-white p-8">
      <p className="text-center font-thin italic text-blue-400">
        Your style journey begins here! Fill your cart with handcrafted elegance
        and redefine your look with our unique accessories. Explore our
        collections and add a touch of sophistication to your shopping bag!
      </p>
    </div>
  );
};

const Cart = () => {
  const { cart, setTaxAmount } = useContext(CartContext);

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  let cartValue = 0;
  if (cart.length > 0) {
    cartValue = cart
      .map((item) => item.price * item.quantity)
      .reduce((acc, cV) => acc + cV);
  }

  const taxes = cartValue * 0.12;
  useEffect(() => {
    setTaxAmount(taxes);
  }, []);

  const thisPageDetails = pageDetails.find(
    (details) => details.route === "/cart",
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-200">
      <div className="flex flex-col items-center justify-center gap-4 gap-y-2 p-8">
        <img
          className="h-[100px] w-fit"
          src="images/crown_primary.svg"
          alt=""
        />
        <h1 className="text-3xl font-semibold text-gray-900 md:text-5xl">
          {thisPageDetails.title}
        </h1>
        <p className="w-2/3 text-center">{thisPageDetails.description}</p>
      </div>

      {/* Card Items */}
      <div className="mx-auto my-10 flex w-4/5 flex-col gap-y-8 md:gap-x-2 md:gap-y-0 lg:flex-row">
        <div className="flex w-full flex-col gap-y-4 lg:w-2/3">
          {cart.length > 0 ? (
            cart.map((item) => (
              <CartCard
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                quote={item.quote}
                price={item.price}
                quantity={item.quantity}
                inStock={item.inStock}
              />
            ))
          ) : (
            <EmptyCart />
          )}
        </div>

        <div className="w-full lg:w-1/3">
          {/* Cart Total Card */}
          <div className="custom-shadow rounded-md bg-white p-4">
            <h2 className="my-4 text-xl font-semibold text-gray-900">
              Cart Total:
            </h2>
            <hr className="mx-auto my-2 w-5/6 border-t border-gray-300" />
            <div className="my-4 flex justify-between">
              <div>
                <p className="text-sm font-thin text-blue-400">Sub Total:</p>
                <p className="text-sm font-thin text-blue-400">
                  Taxes (at 12%)
                </p>
              </div>
              <div>
                <p className="text-end text-sm font-thin italic text-blue-400">
                  USD {cartValue.toFixed(2)}
                </p>
                <p className="text-end text-sm font-thin italic text-blue-400">
                  USD {taxes.toFixed(2)}
                </p>
              </div>
            </div>
            <hr className="mx-auto my-2 w-5/6 border-t border-gray-300" />
            <div className="my-4 flex justify-between">
              <h3 className="text-lg font-semibold">Total:</h3>
              <h3 className="text-lg italic">
                USD {cartValue > 0 ? (cartValue + taxes).toFixed(2) : "0.00"}
              </h3>
            </div>
            <hr className="mx-auto my-2 w-5/6 border-t border-gray-300" />
            <div className="my-4">
              <Button
                disabled={cart.length === 0}
                style="text-white text-lg mr-0 ml-auto"
                onClick={
                  !token ? () => navigate("/auth") : () => navigate("/checkout")
                }
              >
                {!token ? "Login to Checkout" : "Checkout"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Details regarding shipment */}
      <div className="custom-shadow mx-auto mb-12 flex w-4/5 flex-col gap-y-4 rounded-md bg-white p-4">
        <h3 className="text-xl font-semibold">Delivery Information:</h3>
        <p>
          Standard delivery takes around{" "}
          <span className="font-bold">4-5 days</span>.
        </p>
        <h3 className="text-xl font-semibold">Need it faster?</h3>
        <p>
          You can select <span className="font-bold">Next Day Delivery</span>{" "}
          option at checkout to avail the{" "}
          <span className="font-bold">
            Next Working Day Delivery (Order before 10p.m).
          </span>
        </p>
        <p>
          Next day delivery is only available in select major cities.{" "}
          <span className="font-bold">
            Delivery is Monday to Friday, excluding public holidays.
          </span>
        </p>
        <p>Items once sold CANNOT be replaced or returned.</p>
        <p>All items will arrive in unmarked packaging to prevent theft.</p>
      </div>
    </div>
  );
};

export default Cart;
