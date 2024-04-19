import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Button from "./Button";
import { getFormattedDate } from "../utils/helperFunctions";
import Loading from "./Loading";

const baseURL = "http://127.0.01:5050/api/v1/user/orders";

const ProductRow = ({ product, quantity }) => {
  return (
    <tr>
      <td className="m-2">
        <img
          className="h-[100px] w-[100px] rounded-md"
          src={product.imageCover}
          alt={product.name}
        />
      </td>
      <td className="flex flex-col p-2">
        <p className="text-lg font-semibold capitalize">{product.name}</p>
        <p className="text-sm font-thin capitalize">{product.quote}</p>
        <p className="text-sm font-thin">Price: USD {product.price}</p>
      </td>
      <td className="p-2">
        <p className="text-center">{quantity}</p>
      </td>
      <td className="p-2">
        <p className="text-center">{product.price * quantity}</p>
      </td>
    </tr>
  );
};

ProductRow.propTypes = {
  product: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
};

const OrderCard = ({ order }) => {
  const thisURL = `${baseURL}/${order._id}`;

  const navigate = useNavigate();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["specificOrder", order._id],
    queryFn: async () => {
      const response = await axios.get(thisURL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data.data.order;
    },
  });

  if (isPending) return <Loading />;

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="custom-shadow rounded-md bg-white p-4">
      <div>
        <h1 className="text-lg font-semibold">Order ID: {order._id}</h1>
        <p className="text-sm font-thin">
          Placed on: {getFormattedDate(order.createdAt)}
        </p>
      </div>
      <hr className="my-2 border-b border-solid border-gray-200" />
      <div>
        <table className="w-full">
          <thead className="text-center text-lg font-semibold">
            <tr>
              <td className="w-[100px] flex-grow-0 p-2">Image</td>
              <td className="p-2">Product Details</td>
              <td className="p-2">Quantity</td>
              <td className="p-2">Total in USD</td>
            </tr>
          </thead>
          <tbody>
            {isPending ? (
              <loading />
            ) : isError ? (
              <p>Error: {error.message}</p>
            ) : (
              data.products.map((product, index) => {
                return (
                  <ProductRow
                    key={index + 1}
                    product={product.product}
                    quantity={product.quantity}
                  />
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <hr className="my-2 border-b border-solid border-gray-200" />
      <div className="flex justify-end">
        <Button
          disabled={isPending || isError}
          style="text-white py-2"
          onClick={() => navigate(`/invoice/${order._id}`)}
        >
          Download Invoice
        </Button>
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrderCard;
