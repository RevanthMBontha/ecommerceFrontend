import { useContext } from "react";
import { useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";
import { CiSearch } from "react-icons/ci";
import { Button } from "./../../components";

import SearchContext from "./../../contexts/searchContext.js";

const SearchBar = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const invalidateQuery = () => {
    // Invalidate the query with key 'route:/search'
    queryClient.invalidateQueries("route:/search");
  };

  return (
    <div className="relative flex w-fit items-center">
      <div className="absolute left-1 z-10 text-gray-500">
        <CiSearch size={21} />
      </div>
      <input
        className="h-8 w-full appearance-none rounded-l-md bg-gray-100 pl-7 text-black focus:outline-none md:w-[350px]"
        placeholder="Want something? Search here..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button
        style="rounded-l-none"
        onClick={() => {
          navigate(`/search`);
          invalidateQuery();
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
