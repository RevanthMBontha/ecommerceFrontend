import { useEffect, useContext } from "react";
import { useLocation } from "react-router";
import { pageDetails } from "../utils/pageDetails";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Card, Loading } from "../components";
import { Error } from "../pages";
import SearchContext from "../contexts/searchContext";

const SearchPageListing = () => {
  const location = useLocation();
  const thisPageDetails = pageDetails.find(
    (details) => details.route === location.pathname,
  );
  let URL = thisPageDetails.url;

  const { searchValue, setSearchValue } = useContext(SearchContext);
  const restructuredSearchValue = searchValue.replace(" ", "%20");
  URL = URL + `?value=${restructuredSearchValue}`;

  const { isPending, isError, data, error } = useQuery({
    queryKey: [`route:${location.pathname}`],
    queryFn: async () => {
      const response = await axios.get(URL);
      setSearchValue("");
      return response.data.data.products;
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ! Use this for checking the error
  //   if (isError) console.log(error);

  if (isPending) return <Loading />;

  if (isError) return <Error error={error} />;

  if (data.length === 0) {
    return (
      <div>
        <div className="flex flex-col items-center justify-center gap-4 gap-y-2 p-6">
          <img
            className="h-[100px] w-fit"
            src="images/crown_primary.svg"
            alt="logo"
          />
          <h1 className="text-5xl font-semibold text-gray-900">
            {thisPageDetails.title}
          </h1>
          <p className="w-2/3 text-center">{`${thisPageDetails.description}: ${data.length}!`}</p>
        </div>
        <div className="flex h-fit w-full flex-col items-center justify-center pb-7">
          <img
            className="mb-4 h-[300px] w-fit"
            src="https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-3328225-2809510.png?f=webp"
            alt=""
          />
          <h2 className="text-2xl">
            Sorry! No products found matching your search term!
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 gap-y-2 p-8">
        <img
          className="h-[100px] w-fit"
          src="images/crown_primary.svg"
          alt="logo"
        />
        <h1 className="text-5xl font-semibold text-gray-900">
          {thisPageDetails.title}
        </h1>
        <p className="w-2/3 text-center">{`${thisPageDetails.description}: ${data.length}!`}</p>
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

export default SearchPageListing;
