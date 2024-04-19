import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loading, OrderCard } from "../components";

const URL = "https://ecommercebackend-rt0y.onrender.com/api/v1/user/orders";

const Orders = () => {
  const { isPending, isError, data } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const response = await axios.get(URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      return response.data.data.orders;
    },
  });

  const navigate = useNavigate();
  if (!localStorage.getItem("token")) return navigate("/");

  if (isPending) return <Loading />;

  if (isError) return <div>{Error.message}</div>;

  return (
    <div className="bg-white p-4">
      <div>
        <h1 className="text-center text-3xl font-semibold">Your orders</h1>
        <hr className="mx-auto mb-8 mt-4 w-2/3 border-b border-solid border-gray-400" />
      </div>
      <div className="flex flex-col gap-y-4">
        {data.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
