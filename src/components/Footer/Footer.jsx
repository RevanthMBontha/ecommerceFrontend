import NavLink from "../Header/NavLink";
import Copyright from "./Copyright";
import FooterColumn from "./FooterColumn";

function Footer() {
  return (
    <div className="flex flex-grow-0 flex-col bg-gray-900 text-white">
      <div className="flex flex-col items-start justify-evenly p-4 lg:flex-row">
        <FooterColumn>
          <NavLink style="font-semibold" to="/">
            Home
          </NavLink>
          <NavLink style="font-thin" to="/about">
            About Us
          </NavLink>
          <NavLink style="font-thin" to="/contact">
            Contact Us
          </NavLink>
        </FooterColumn>

        <FooterColumn>
          <NavLink style="font-semibold" to="/men">
            For Men
          </NavLink>
          <NavLink style="font-thin" to="/men/rings">
            Rings
          </NavLink>
          <NavLink style="font-thin" to="/men/bracelets">
            Bracelets
          </NavLink>
          <NavLink style="font-thin" to="/men/necklaces">
            Necklaces
          </NavLink>
        </FooterColumn>

        <FooterColumn>
          <NavLink style="font-semibold" to="/women">
            For Women
          </NavLink>
          <NavLink style="font-thin" to="/women/rings">
            Rings
          </NavLink>
          <NavLink style="font-thin" to="/women/bracelets">
            Bracelets
          </NavLink>
          <NavLink style="font-thin" to="/women/necklaces">
            Necklaces
          </NavLink>
          <NavLink style="font-thin" to="/women/skincare">
            Skin Care
          </NavLink>
        </FooterColumn>

        <FooterColumn>
          <NavLink style="font-semibold" to="/unisex">
            Unisex
          </NavLink>
        </FooterColumn>

        <FooterColumn>
          <NavLink style="font-semibold" to="/">
            Other Links
          </NavLink>
          <NavLink style="font-thin" to="/auth">
            Login/Register
          </NavLink>
          <NavLink style="font-thin" to="/cart">
            Cart
          </NavLink>
        </FooterColumn>
      </div>
      <Copyright />
    </div>
  );
}

export default Footer;
