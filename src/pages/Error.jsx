import PropTypes from "prop-types";
import { Button } from "../components";

const Error = ({ error }) => {
  if (error.code === "ERR_BAD_REQUEST") {
    {
      return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-y-4">
          <img src="" alt="" />
          <h1 className="text-5xl font-bold">404</h1>
          <p>{error.message}</p>
          <Button style="text-white" onClick={() => window.location.reload}>
            Refresh Page
          </Button>
        </div>
      );
    }
  }
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      {error.message}
      <Button style="text-white" onClick={() => window.location.reload()}>
        Refresh Page
      </Button>
    </div>
  );
};

Error.propTypes = {
  error: PropTypes.object,
};

export default Error;
