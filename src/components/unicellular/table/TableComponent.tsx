import { isString } from 'lodash';
import React, { ReactElement } from 'react';
import useTextOverflow from '../../../utlis/useTextOverflow';
import TooltipComponent from '../tooltip/TooltipComponent';

export type ColProps = {
  key?: string;
  value?: React.ReactNode;
  className?: string;
};
export type RowProps = { data: ColProps };

type Props<T> = {
  headers: {
    name: string;
    class: string;
    action?: ReactElement;
  }[];
  tableContainerClass?: string;
  body:
    | {
        rowData: T;
        row: (
          | {
              col: {
                item: number;
                class?: string;
                handleClick?: () => void;
              };
            }
          | {
              col: {
                item: string | number | JSX.Element | JSX.Element[];
                class?: string;
                handleClick?: () => void;
              };
            }
        )[];
      }[]
    | undefined;
  tableRow: {
    style: string;
    handleRowClick: (item: T) => void;
  };
  additionalHeader?: JSX.Element | null;
};

const TableRow = ({
  cellData,
}: {
  cellData: string | number | JSX.Element | JSX.Element[];
  style?: string;
  key?: number;
}) => {
  const { ref, overflowing: isOverflowing } = useTextOverflow();
  return (
    <div>
      <TooltipComponent showTooltip={isOverflowing} tooltipContent={<div>{cellData}</div>}>
        <div
          className={`${isString(cellData) && 'text-ellipsis whitespace-nowrap overflow-hidden'}`}
          ref={ref}
        >
          <span>{cellData}</span>
        </div>
      </TooltipComponent>
    </div>
  );
};

const TableComponent = <T,>({
  headers,
  body,
  tableRow,
  tableContainerClass,
  additionalHeader,
}: Props<T>): JSX.Element => {
  return (
    <>
      <div
        className={` max-h-full overflow-auto shadow-[0rem_0.25rem_0.25rem_rgba(0,0,0,0.25)] ${tableContainerClass}`}
      >
        <table className="w-full h-full text-left bg-white ">
          <thead className="text-base text-gray-900 top-0 bg-[#CFD4FA] sticky z-10">
            <tr className="whitespace-nowrap">
              {headers.map((header, index) => {
                return (
                  <th key={index} scope="col" className={`py-3 px-[1rem] ${header.class}`}>
                    {header.action && header.action}
                    {header.name}
                  </th>
                );
              })}
            </tr>
            {additionalHeader ? <tr>{additionalHeader}</tr> : null}
          </thead>
          <tbody className="rounded">
            {body?.map((item, rowIndex) => {
              return (
                <tr
                  key={rowIndex}
                  className={`${tableRow?.style}`}
                  onClick={() => tableRow?.handleRowClick(item?.rowData)}
                >
                  {item?.row?.map((colItem, colIndex) => {
                    return (
                      <td
                        key={colIndex}
                        className={`py-3 px-[1rem] text-base font-medium ${colItem.col.class}`}
                      >
                        <TableRow
                          key={colIndex}
                          cellData={colItem.col.item}
                          style={colItem.col.class}
                        />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableComponent;
