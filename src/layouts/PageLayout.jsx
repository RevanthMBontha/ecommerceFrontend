import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

const PageLayout = () => {
  return (
    <div className="flex h-screen w-full flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PageLayout;
