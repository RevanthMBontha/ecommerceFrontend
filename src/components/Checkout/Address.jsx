import { useContext } from "react";
import PropTypes from "prop-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { RiPencilFill } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { toast } from "react-toastify";
import Button from "../Button";
import CartContext from "../../contexts/cartContext";

const URL = "https://ecommercebackend-rt0y.onrender.com/api/v1/user/addresses";

const Address = ({ inputAddress, showRadio }) => {
  const { address, setAddress } = useContext(CartContext);

  const queryClient = useQueryClient();

  const axiosInstance = axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const deleteAddressMutation = useMutation({
    mutationFn: async (id) => {
      console.log(`${URL}/${id}`);
      const response = axiosInstance.delete(`${URL}/${id}`);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("savedAddresses");
      toast.success("Address deleted successfully");
    },
  });

  return (
    <div className="flex w-full items-start rounded-md bg-white p-2">
      <div
        className={`${showRadio ? "visible" : "hidden"} w-fit flex-grow-0 p-2`}
      >
        <input
          type="radio"
          name="icon"
          id="icon"
          onChange={() => setAddress(inputAddress)}
          checked={inputAddress._id === address._id}
        />
      </div>
      <div className="flex flex-grow flex-col p-2">
        <p className="text-lg font-semibold capitalize">{inputAddress.name}</p>
        <p>{inputAddress.houseNum},</p>
        <p>{inputAddress.area},</p>
        <p>{inputAddress.city},</p>
        <p>{inputAddress.state},</p>
        <p>{`${inputAddress.country} - ${inputAddress.pinCode}`}.</p>
        <p>phone: {inputAddress.phoneNumber}</p>
      </div>
      <div className="flex-grow-0">
        <div className="flex flex-col gap-y-2">
          <Button
            style="text-white px-2 py-2"
            onClick={() => alert("Yet to implement editing of saved addresses")}
          >
            <RiPencilFill size={24} />
          </Button>
          <Button
            style="text-white px-2 py-2"
            onClick={() => deleteAddressMutation.mutate(inputAddress._id)}
          >
            <IoMdTrash size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};

Address.propTypes = {
  inputAddress: PropTypes.object.isRequired,
  showRadio: PropTypes.bool.isRequired,
};

Address.defaultProps = {
  inputAddress: {
    name: "User Name",
    phoneNumber: "User Number",
    houseNumber: "3005, Example Apartments, Example Street",
    area: "Example Area",
    landmark: "Near Example",
    city: "Example City",
    state: "Example State",
    country: "Example Country",
    pinCode: "000000",
  },
  showRadio: true,
};
export default Address;
