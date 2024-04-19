import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const NavLink = ({ children, style, to }) => {
  const navLinkStyle = twMerge(
    "text-white cursor-pointer hover:underline",
    style,
  );
  const navigate = useNavigate(to);

  return (
    <span className={navLinkStyle} onClick={() => navigate(to)}>
      {children}
    </span>
  );
};

NavLink.propTypes = {
  children: PropTypes.node,
  style: PropTypes.string,
  to: PropTypes.string.isRequired,
};

export default NavLink;
