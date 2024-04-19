import { useEffect } from "react";
import { useLocation } from "react-router";
import { pageDetails } from "../utils/pageDetails";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Card, Loading } from "../components";
import { Error } from "../pages";

const ProductListing = () => {
  const location = useLocation();

  const thisPageDetails = pageDetails.find(
    (details) => details.route === location.pathname,
  );
  let URL = thisPageDetails.url;

  const { isPending, isError, data, error } = useQuery({
    queryKey: [`route:${location.pathname}`],
    queryFn: async () => {
      const response = await axios.get(URL);
      return response.data.data.products;
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isError) console.log(error);

  if (isPending) return <Loading />;

  if (isError) return <Error error={error} />;

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 gap-y-2 p-8">
        <img
          className="h-[100px] w-fit"
          src="images/crown_primary.svg"
          alt=""
        />
        <h1 className="text-5xl font-semibold text-gray-900">
          {thisPageDetails.title}
        </h1>
        <p className="w-2/3 text-center">{thisPageDetails.description}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 gap-y-8 p-8">
        {data.map((product) => {
          return (
            <Card
              key={product._id}
              imgSrc={product.imageCover}
              title={product.name}
              desc={product.quote}
              id={product._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductListing;
