import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button, Loading } from "./../components";
import { getFormattedDate } from "../utils/helperFunctions";

const UserDetails = () => {
  const navigate = useNavigate();
  const baseURL = "https://ecommercebackend-rt0y.onrender.com/api/v1/users";
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axios.get(
        `${baseURL}/${localStorage.getItem("id")}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      return response.data.data.user;
    },
  });

  if (isPending) return <Loading />;

  if (isError) return <div>{error.message}</div>;

  return (
    <div className="h-full p-4">
      <div className="mb-12">
        <h1 className="text-3xl font-semibold">User Details</h1>
      </div>

      <div className="mb-12 flex flex-col gap-y-6">
        {/* Name Input Block */}
        <div>
          <label className="block text-lg" htmlFor="name">
            Name:
          </label>
          <input
            className="h-8 w-1/4 min-w-[300px] appearance-none rounded-md border border-solid border-gray-400 bg-gray-200 pl-2 capitalize"
            type="text"
            name="name"
            id="name"
            disabled
            defaultValue={`${data.firstName} ${data.lastName}`}
          />
        </div>

        {/* Name Input Block */}
        <div>
          <label className="block text-lg" htmlFor="name">
            Email:
          </label>
          <input
            className="h-8 w-1/4 min-w-[300px] appearance-none rounded-md border border-solid border-gray-400 bg-gray-200 pl-2"
            type="text"
            name="name"
            id="name"
            disabled
            defaultValue={`${data.email}`}
          />
        </div>

        {/* Name Input Block */}
        <div>
          <label className="block text-lg" htmlFor="name">
            Account created on:
          </label>
          <input
            className="h-8 w-1/4 min-w-[300px] appearance-none rounded-md border border-solid border-gray-400 bg-gray-200 pl-2 capitalize"
            type="text"
            name="name"
            id="name"
            disabled
            defaultValue={`${getFormattedDate(data.createdAt)}`}
          />
        </div>
      </div>
      <div className="flex w-full justify-end pr-4">
        <Button style="text-white text-lg" onClick={() => navigate("/profile")}>
          Back to Profile
        </Button>
      </div>
    </div>
  );
};

export default UserDetails;
