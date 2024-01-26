import React from 'react';

const Search = () => {
  return (
    <React.Fragment>
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
      <input
        type="text"
        id="table-search"
        className="block py-2 px-3 pl-10 w-80 text-sm text-black bg-white placeholder-black rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search"
      />
    </React.Fragment>
  );
};

export default Search;
