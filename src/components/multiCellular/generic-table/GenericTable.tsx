import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

interface GenericTableProps {
  headers: string[];
  children?: JSX.Element;
  pageCount: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  setRecordsPerPage: (perPage: number) => void;
}
const GenericTable = ({ headers, children }: GenericTableProps): ReactElement => {
  const { t } = useTranslation(['campus', 'common']);

  return (
    <div className="flex flex-col w-full mt-12">
      <div className="min-h-[calc(100vh_-_20rem)] max-h-[calc(100vh_-_20rem)] overflow-auto shadow-[0rem_0.25rem_0.25rem_rgba(0,0,0,0.25)] bg-white">
        <table className="w-full h-full text-left bg-white">
          <thead className="text-base text-gray-900 sticky top-0 bg-[#CFD4FA]">
            <tr className="whitespace-nowrap">
              {headers.map((header: string) => (
                <th key={header} scope="col" className="py-3 px-6">
                  {t(header)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
};

export default GenericTable;
