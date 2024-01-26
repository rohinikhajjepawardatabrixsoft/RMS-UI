import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  setRecordsPerPage: (recordsPerPage: number) => void;
  setCurrentPage: (currentPage: number) => void;
  pageCount: number;
  resetPage?: number;
  currentPage: number;
  recordsPerPage: number;
  selectedPage: number;
  handlePagination: (newPage: number) => void;
  handlePageSize: (size: number) => void;
}

const pageOptions = [
  { value: 10, label: '10' },
  { value: 25, label: '25' },
  { value: 50, label: '50' },
  { value: 100, label: '100' },
];
const Pagination = ({
  resetPage,
  pageCount,
  recordsPerPage,
  selectedPage,
  handlePagination,
  handlePageSize,
}: PaginationProps): ReactElement => {
  const [tempVal, setTempVal] = useState(0);
  useEffect(() => {
    if (resetPage === 1) {
      setTempVal(1);
    }
  }, [resetPage]);
  return (
    <div className="flex !my-3 justify-end " key={tempVal}>
      <ReactPaginate
        // initialPage={tempVal}
        forcePage={selectedPage - 1}
        breakLabel="..."
        breakClassName="px-3 py-2 bg-gray_1 text-black "
        breakLinkClassName="text-black"
        nextLabel={
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        }
        onPageChange={(data) => {
          handlePagination(data.selected);
          if (tempVal === 1) setTempVal(0);
        }}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        }
        marginPagesDisplayed={2}
        containerClassName="flex "
        previousClassName="bg-gray_1 text-black flex items-center"
        previousLinkClassName="text-black px-3 py-2 "
        nextClassName=" bg-gray_1 text-black flex items-center"
        nextLinkClassName="text-black px-3 py-2"
        pageClassName="bg-gray_1 !text-black border !border-gray_1 flex items-center"
        pageLinkClassName="text-black px-3 py-2"
        activeClassName="bg-indigo-500/90 !text-black border-gray_2"
        activeLinkClassName="text-black"
        // renderOnZeroPageCount={null}
      />

      <select
        className="border border-solid border-gray_5 rounded bg-gray_4 items-center ml-3 text-sm font-medium h-[2.6rem]"
        onChange={(event: ChangeEvent<HTMLSelectElement>) => {
          handlePageSize(parseInt(event.target.value, 10));
        }}
        defaultValue={recordsPerPage}
      >
        {pageOptions.map((page, index: number) => (
          <option key={`${page.label}-${index}`} value={page.value}>
            {page.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Pagination;
