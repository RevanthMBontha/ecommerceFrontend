import { useNavigate } from "react-router";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex w-fit cursor-pointer items-center"
      onClick={() => navigate("/")}
    >
      <img
        className="mr-2 h-[32px] w-[32px]"
        src="/images/crown_neutral.svg"
        alt=""
      />
      <span className="text-2xl font-semibold">UrbanForge</span>
    </div>
  );
};

export default Logo;
