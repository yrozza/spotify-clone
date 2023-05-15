import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="  p-2 text-gray-400 focus-within:text-white  ">
      <label htmlFor="search-field" className="sr-only">
        Search all files
      </label>
      <div className="relative text-gray-600 focus-within:text-gray-400">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </span>
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className=" py-2 text-sm text-white bg-transparent border-solid border-2 border-white rounded-full pl-10 focus:outline-none focus:bg-gray-900 focus:text-white w-96"
          placeholder="Search"
          type="search"
          value={searchTerm}
          // style='width: 80 %'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>

  );
};

export default Searchbar;
