import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loading, Address } from "../components";

const URL = "http://127.0.01:5050/api/v1/user/addresses";
const SavedAddresses = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["savedAddresses"],
    queryFn: async () => {
      const response = await axios.get(URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data.data.addresses;
    },
  });

  if (isPending) return <Loading />;

  if (isError) return <div>{error.message}</div>;

  return (
    <div className="flex h-full flex-col gap-y-4 bg-gray-200 p-4">
      <div className="py-4">
        <h1 className="text-center text-3xl font-semibold">Your Addresses</h1>
        <hr className="mx-auto mb-8 mt-4 w-2/3 border-b border-solid border-gray-400" />
      </div>
      {data.length > 0 ? (
        data.map((address) => (
          <Address key={address._id} inputAddress={address} showRadio={false} />
        ))
      ) : (
        <div className="bg-white p-4">
          No saved addresses. Please add a new address to proceed
        </div>
      )}
    </div>
  );
};

export default SavedAddresses;
