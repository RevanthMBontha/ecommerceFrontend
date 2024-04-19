import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full p-4">
      <div className="mb-12">
        <h1 className="text-3xl font-semibold capitalize">
          Hi, {localStorage.getItem("name")}
        </h1>
        <p>Here are some details about your account!</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {/* Box component  for Details*/}
        <div
          onClick={() => navigate("/userDetails")}
          className="flex h-fit w-1/3 min-w-[300px] cursor-pointer gap-x-2 rounded-md border border-solid border-gray-400 p-2"
        >
          <div>
            <img
              className="h-[96px] w-[120px] object-contain"
              src="/images/user.png"
              alt="profile"
            />
          </div>
          <div className="flex w-full items-center justify-center">
            <h2 className="text-xl">Your Details</h2>
          </div>
        </div>
        {/* Box Component for Orders */}
        <div
          onClick={() => navigate("/orders")}
          className="flex h-fit w-1/3 min-w-[300px] cursor-pointer gap-x-2 rounded-md border border-solid border-gray-400 p-2"
        >
          <div>
            <img
              className="h-[96px] w-[120px] object-contain"
              src="/images/orders.png"
              alt="carton"
            />
          </div>
          <div className="flex w-full items-center justify-center">
            <h2 className="text-xl">Your Orders</h2>
          </div>
        </div>
        {/* Box Component 03 */}
        <div
          onClick={() => navigate("/savedAddresses")}
          className="flex h-fit w-1/3 min-w-[300px] cursor-pointer gap-x-2 rounded-md border border-solid border-gray-400 p-2"
        >
          <div>
            <img
              className="h-[96px] w-[120px] object-contain"
              src="/images/addresses.png"
              alt="location pin"
            />
          </div>
          <div className="flex w-full items-center justify-center">
            <h2 className="text-xl">Your Addresses</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
