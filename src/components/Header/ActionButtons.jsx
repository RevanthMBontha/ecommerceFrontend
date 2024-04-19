import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import Button from "../Button";
import CartContext from "../../contexts/cartContext";

const ActionButtons = () => {
  const { cart } = useContext(CartContext);

  const [showUser, setShowUser] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="relative flex w-fit items-center gap-x-2">
      <Button
        style={`${localStorage.getItem("token") === null ? "visible" : "invisible"} rounded-md text-white`}
        onClick={() => {
          navigate("/auth");
        }}
      >
        Login/Register
      </Button>

      <Button
        style="flex rounded-md bg-gray-900 p-2 text-orange-400 hover:bg-gray-900 hover:text-orange-600"
        onClick={() => {
          navigate("/cart");
        }}
      >
        <FaCartShopping size={24} />
      </Button>
      {cart.length > 0 && (
        <div className="absolute right-12 top-0 w-fit rounded-full bg-gray-400 px-1 text-sm">
          {cart.length}
        </div>
      )}
      <Button
        // onBlur={() => setShowUser(false)}
        style="flex justify-center rounded-md bg-gray-900 p-2 text-orange-400 hover:bg-gray-900 hover:text-orange-600"
        onClick={() => setShowUser(!showUser)}
      >
        <FaUserCircle size={24} />
      </Button>
      {showUser && (
        <div className="absolute right-0 top-11 w-full rounded-md p-0">
          <div className="flex w-full cursor-pointer justify-center rounded-md rounded-b-none bg-gray-800 p-2 px-8">
            Hi,{" "}
            {localStorage.getItem("name") === null ? (
              "user"
            ) : (
              <span className="pl-1 capitalize">
                {localStorage.getItem("name")}
              </span>
            )}
          </div>
          <div
            className="flex w-full cursor-pointer justify-center rounded-none bg-gray-800 p-2 px-8 hover:bg-gray-600"
            onClick={() => {
              navigate("/profile");
              setShowUser(false);
            }}
          >
            Profile
          </div>
          <div
            className="flex w-full cursor-pointer justify-center rounded-none bg-gray-800 p-2 px-8 hover:bg-gray-600"
            onClick={() => {
              setShowUser(false);
              navigate("/orders");
            }}
          >
            Orders
          </div>
          <div
            className="flex w-full cursor-pointer justify-center rounded-none bg-gray-800 p-2 px-8 hover:bg-gray-600"
            onClick={() => {
              setShowUser(false);
              navigate("/savedAddresses");
            }}
          >
            Addresses
          </div>
          <div
            className="flex w-full cursor-pointer justify-center rounded-md rounded-t-none bg-gray-800 p-2 px-8 hover:bg-gray-600"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("name");
              localStorage.removeItem("id");
              navigate("/");
            }}
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionButtons;
