import NavLink from "./NavLink";

const Nav = () => {
  return (
    <div className="flex w-full flex-col items-center gap-y-2 bg-gray-400 p-1 md:flex-row md:justify-evenly lg:gap-y-0">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/all"}>All Products</NavLink>
      <NavLink to="/men">For Men</NavLink>
      <NavLink to="/women">For Women</NavLink>
      <NavLink to="/unisex">Unisex</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </div>
  );
};

export default Nav;
