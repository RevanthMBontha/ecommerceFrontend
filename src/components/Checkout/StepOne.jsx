import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../Loading";
import AddNewAddress from "./AddNewAddress";
import Address from "./Address";

const URL = "https://ecommercebackend-rt0y.onrender.com/api/v1/user/addresses";

const StepOne = () => {
  const token = localStorage.getItem("token");

  const axiosInstance = axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["savedAddresses"],
    queryFn: async () => {
      const response = await axiosInstance.get(URL);
      return response.data.data.addresses;
    },
  });

  return (
    <div
      className="grid h-full grid-cols-1 rounded-md bg-white p-2 lg:grid-cols-2 lg:overflow-y-auto
    "
    >
      {/* Saved Address Column */}
      <div className="flex flex-col p-2 lg:overflow-y-auto lg:border-r lg:border-solid lg:border-gray-200">
        {/* Container for the Saved Addresses Header */}
        <div>
          <h1 className="text-xl font-semibold">Saved Addresses</h1>
          <hr className="mx-auto my-2 w-5/6 border-t border-gray-300" />
        </div>
        {/* Container for saved addresses */}
        <div className="flex flex-1 flex-col gap-y-3 rounded-md bg-gray-200 p-2 lg:overflow-y-auto">
          {isPending ? (
            <Loading />
          ) : isError ? (
            <div>{error.message}</div>
          ) : data.length === 0 ? (
            <div className="rounded-md bg-white p-4">
              No saved addresses. Please add an address to proceed!
            </div>
          ) : (
            data.map((address) => (
              <Address key={address._id} inputAddress={address} />
            ))
          )}
        </div>
      </div>
      {/* Add New Address Column */}
      <div
        className="flex flex-col p-2 lg:overflow-y-auto 
      lg:border-l lg:border-solid lg:border-gray-200"
      >
        {/* Container for Add new Address Header */}
        <div>
          <h1 className="text-xl font-semibold">Add New Address</h1>
          <hr className="mx-auto my-2 w-5/6 border-t border-gray-300" />
        </div>
        {/* Container for Add new Address Component */}
        <div className="flex-1 rounded-md bg-gray-200 p-2 lg:overflow-y-auto">
          <AddNewAddress />
        </div>
      </div>
    </div>
  );
};

export default StepOne;
