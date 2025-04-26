import React, { useState, useCallback, useEffect } from "react";
import { Search } from "lucide-react";
import { initialShoes, Shoe } from "./ShoeList";

interface ShoeFilterProps {
  searchTerm: string;
  onSearchChange: (newTerm: string) => void;
}

export default function ShoeFilter(props: ShoeFilterProps) {
  // declare state variable
  const [searchResults, setSearchResults] = useState<Shoe[]>([]);

  const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };
  const handleSearch = useCallback(
    debounce((term: string) => {
      if (term.trim() === "") {
        setSearchResults([]);
      } else {
        const results = initialShoes.filter((item) =>
          item.name.toLowerCase().includes(term.toLowerCase())
        );
        setSearchResults(results);
      }
    }, 3000),
    []
  );

  useEffect(() => {
    handleSearch(props.searchTerm);
  }, [props.searchTerm, handleSearch]);

  return (
    <div className="flex h-fit w-full flex-col items-center bg-white p-4">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mb-8 w-full max-w-2xl"
      >
        <div className="relative">
          <input
            type="text"
            value={props.searchTerm}
            onChange={(e) => props.onSearchChange(e.target.value)}
            className="w-full rounded-full border border-gray-200 bg-white px-5 py-3 pr-20 text-base shadow-md transition-shadow duration-200 hover:shadow-lg focus:border-gray-300 focus:outline-none"
            placeholder="Search for your favorite sneaker"
          />
          <div className="absolute right-0 top-0 mr-4 mt-3 flex items-center">
            <button type="submit" className="text-blue-500 hover:text-blue-600">
              <Search size={20} />
            </button>
          </div>
        </div>
      </form>
      {searchResults.length > 0 && (
        <div className="w-full max-w-2xl rounded-lg bg-white p-4 shadow-md">
          <h2 className="mb-4 text-xl font-bold"> Search Results: </h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id} className="mb-2">
                {result.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
