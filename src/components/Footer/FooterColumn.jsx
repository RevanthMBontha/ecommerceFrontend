import PropTypes from "prop-types";

const FooterColumn = ({ children }) => {
  return (
    <div className="flex w-full flex-col items-center gap-y-2 md:w-fit">
      {children}
    </div>
  );
};

FooterColumn.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterColumn;
