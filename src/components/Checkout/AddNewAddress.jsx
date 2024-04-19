import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Button from "../Button";

const URL = "https://ecommercebackend-rt0y.onrender.com/api/v1/user/addresses";

const AddNewAddress = () => {
  const emptyAddress = {
    name: "",
    phoneNumber: 0,
    houseNum: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  };
  const [newAddress, setNewAddress] = useState(emptyAddress);

  const token = localStorage.getItem("token");

  const axiosInstance = axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const queryClient = useQueryClient();

  const addAddressMutation = useMutation({
    mutationFn: async (data) => {
      console.log(newAddress);
      const response = await axiosInstance.post(URL, data);
      console.log(response);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("savedAddresses");
      setNewAddress(emptyAddress);
    },
  });

  return (
    <div className="flex flex-col gap-y-4 rounded-md bg-white p-4">
      <div className="flex flex-col">
        <label htmlFor="name">Full Name:</label>
        <input
          className="h-8 rounded-md bg-gray-200 pl-1"
          type="text"
          name="name"
          id="name"
          value={newAddress.name}
          onChange={(e) =>
            setNewAddress({ ...newAddress, name: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="number">Mobile Number:</label>
        <input
          className="h-8 rounded-md bg-gray-200 pl-1"
          type="number"
          name="number"
          id="number"
          value={newAddress.phoneNumber}
          onChange={(e) =>
            setNewAddress({ ...newAddress, phoneNumber: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="houseNum">House Number / Flat No. / Apartment /:</label>
        <input
          className="h-8 rounded-md bg-gray-200 pl-1"
          type="text"
          name="houseNum"
          id="houseNum"
          value={newAddress.houseNum}
          onChange={(e) =>
            setNewAddress({ ...newAddress, houseNum: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="area">Area:</label>
        <input
          className="h-8 rounded-md bg-gray-200 pl-1"
          type="text"
          name="area"
          id="area"
          value={newAddress.area}
          onChange={(e) =>
            setNewAddress({ ...newAddress, area: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="area">Landmark:</label>
        <input
          className="h-8 rounded-md bg-gray-200 pl-1"
          type="text"
          name="area"
          id="area"
          value={newAddress.landmark}
          onChange={(e) =>
            setNewAddress({ ...newAddress, landmark: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="city">City:</label>
        <input
          className="h-8 rounded-md bg-gray-200 pl-1"
          type="text"
          name="city"
          id="city"
          value={newAddress.city}
          onChange={(e) =>
            setNewAddress({ ...newAddress, city: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="state">State:</label>
        <input
          className="h-8 rounded-md bg-gray-200 pl-1"
          type="text"
          name="state"
          id="state"
          value={newAddress.state}
          onChange={(e) =>
            setNewAddress({ ...newAddress, state: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="country">Country:</label>
        <input
          className="h-8 rounded-md bg-gray-200 pl-1"
          type="text"
          name="country"
          id="country"
          value={newAddress.country}
          onChange={(e) =>
            setNewAddress({ ...newAddress, country: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="pin">Pin Code:</label>
        <input
          className="h-8 rounded-md bg-gray-200 pl-1"
          type="number"
          name="pin"
          id="pin"
          value={newAddress.pinCode}
          onChange={(e) =>
            setNewAddress({ ...newAddress, pinCode: e.target.value })
          }
        />
      </div>

      <div className="flex justify-end py-4">
        <Button
          style="text-white text-lg"
          onClick={() => addAddressMutation.mutate(newAddress)}
        >
          Add Address
        </Button>
      </div>
    </div>
  );
};

export default AddNewAddress;
