import React, { ReactElement, useContext, useEffect, useMemo, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { Spinner } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
import LoaderComponent from '../../components/multiCellular/LoaderComponent';
import NoDataAvailable from '../../components/multiCellular/NoDataAvailable';
import Pagination from '../../components/multiCellular/Pagination';
import AddUser from './AddUser';
import Toast from '../../components/unicellular/toast/Toast';
import { ROUTES } from '../../constants/routes';
import { EditButton } from '../../components/unicellular/button/TableButtons';
import TableComponent from '../../components/unicellular/table/TableComponent';

const UserList = (): ReactElement => {
  const { t } = useTranslation(['user']);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isCreateUserOpen, setCreateUserOpen] = useState<boolean>(false);
  const [recordsPerPage, setRecordsPerPage] = useState<number>(
    Number(searchParams.get('size')) === 0 ? 25 : Number(searchParams.get('size')),
  );
  const [pageCount, setPageCount] = useState<number>(1);
  const [resetPage, setResetPage] = useState<number>(
    Number(searchParams.get('page')) === 0 ? 1 : Number(searchParams.get('page')),
  );
  const [totalUser, setTotalUser] = useState(0);
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get('page')) === 0 ? 1 : Number(searchParams.get('page')),
  );
  const [listingData, setListingData] = useState<any>();
  const [edit, setEdit] = useState('');
  const [userToEdit, setUserToEdit] = useState('');

  const handleEditUser = (values: { id: string; isActive: boolean }) => {
    
  };
  const [invalidPg, setInvalidPg] = useState(false);

  // useEffect(() => {
  //   refetchBatchList();
  // }, [currentPage, isCreateUserOpen, refetchBatchList]);
  const tableHeader = [
    { name: t('user:table.header.name'), class: '' },
    { name: t('user:table.header.email'), class: '' },
    { name: t('user:table.header.phone'), class: '' },
    { name: t('user:table.header.type'), class: '' },
    { name: t('user:table.header.city'), class: '' },
    { name: t('user:table.header.status'), class: '' },
    { name: t('user:table.header.action'), class: 'text-center' }]

  const roleValidation = (val: string) => {
    if (val === 'SUPER_ADMIN') {
      if (sessionStorage.getItem('userType') === 'SUPER_ADMIN') {
        return false;
      }
      return true;
    }
    if (val === 'ADMIN') {
      if (sessionStorage.getItem('userType') === 'SUPER_ADMIN') {
        return false;
      }
      return true;
    }
    return false;
  };
  const tableData = listingData?.map((item:any) => {
    const data = {
      rowData: item,
      row: [
        {
          col: {
            item: item.name || '--',
            class: 'max-w-[15rem]',
          },
        },
        {
          col: {
            item: item.email || '--',
            class: 'max-w-[15rem]',
            handleClick: () => {},
          },
        },
        {
          col: {
            item: (
              <>
                {item.countryCode || ''} <span>{item.mobile || '--'}</span>
              </>
            ),
            class: 'max-w-[15rem]',
          },
        },
        {
          col: {
            class: 'max-w-[15rem]',
            item: item.userType || '--',
          },
        },
        {
          col: {
            item: item.city || '--',
            class: 'max-w-[15rem]',
          },
        },
        {
          col: {
            class: 'max-w-[15rem]',
            item: (
              <div
                className={`px-3 py-1 rounded-[0.3rem] flex items-center justify-center w-[7.5rem] ${
                  item.isActive ? 'bg-[#B5EEA2]' : 'bg-[#FF9D9D]'
                }`}
                onClick={(evt) => {
                  evt.stopPropagation();
                }}
              >
                {true &&
                  (true && item.id === userToEdit ? (
                    <Spinner
                      animation="border"
                      size="sm"
                      style={{ marginRight: '0.5rem', color: '#000' }}
                    />
                  ) : (
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#737CF4] checked:border-[#737CF4] focus:outline-none transition duration-200 !mt-0  bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                      id="remember-checkbox"
                      type="checkbox"
                      checked={item.isActive}
                      onChange={() => {
                        handleEditUser({
                          id: item.id,
                          isActive: !item.isActive,
                        });
                      }}
                    />
                  ))}
                {item.isActive ? 'Active' : 'Inactive'}
              </div>
            ),
          },
        },
      ],
    };

    if (true)
      data.row.push({
        col: {
          class: 'flex justify-center',
          item: (
            <EditButton
              className="rounded-lg hove:outline-0 border-transparent active:outline-0 inline-flex items-start px-1 mt-1 "
              isDisabled={roleValidation(item?.userType)}
              handleAction={() => {
                setEdit(item.id);
              }}
            />
          ),
        },
      });
    return data;
  });

  useEffect(() => {
    setSearchParams({
      page: '1',
      size: Number(searchParams.get('size')) === 0 ? '25' : `${Number(searchParams.get('size'))}`,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invalidPg]);

  useEffect(() => {
    setSearchParams({
      page: Number(searchParams.get('page')) === 0 ? '1' : `${Number(searchParams.get('page'))}`,
      size: Number(searchParams.get('size')) === 0 ? '25' : `${Number(searchParams.get('size'))}`,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePagination = (newPage: number) => {
    setSearchParams({
      page: `${newPage + 1}`,
      size: `${recordsPerPage}`,
    });
    setCurrentPage(newPage + 1);
    // navigate(`${location.pathname}?${searchParams.toString()}`);
  };
  const handlePageSize = (size: number) => {
    setRecordsPerPage(size);

    if (currentPage > totalUser / size) {
      setSearchParams({
        page: '1',
        size: `${size}`,
      });
    } else {
      setSearchParams({
        page: `${Number(searchParams.get('page'))}`,
        size: `${size}`,
      });
    }
  };

  useEffect(() => {
    if (Number(searchParams?.get('page')) === 0) {
      setSearchParams({
        page: Number(searchParams.get('page')) === 0 ? '1' : `${Number(searchParams.get('page'))}`,
        size: Number(searchParams.get('size')) === 0 ? '25' : `${Number(searchParams.get('size'))}`,
      });
    }
    setCurrentPage(Number(searchParams?.get('page')) === 0 ? 1 : Number(searchParams?.get('page')));

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  }, [searchParams, setSearchParams]);

  return (
    <div className="p-9">
      <div className="rounded-lg">
        <div className=" flex flex-row justify-between">
          <div className="h-16 rounded w-56 bg-gray-50 shadow-[0rem_0.25rem_0.25rem_rgba(0,0,0,0.25)]  px-4 py-2 flex justify-between items-center mr-[2.6rem]">
            <div className="text-base font-medium leading-5 mt-1">No Of Users: </div>
            <div className="text-lg font-semibold">0</div>
          </div>
          <div className="flex items-center">
              <div>
                <button
                  className={`hover:bg-[#737CF4] hover:text-[#ffffff] text-[#ffffff] font-semibold text-base py-[0.8rem] px-4 rounded-3 flex items-center justify-center bg-[#737CF4] text-[#ffffff]'`}
                  onClick={() => {
                    setCreateUserOpen(true);
                  }}
                >
                  + Add User
                </button>
              </div>
          </div>
        </div>
        <div className="mt-10 h-[calc(100vh_-_20rem)]">
          {false && <LoaderComponent />}
          {!false && <NoDataAvailable />}
          {listingData && listingData?.length > 0 && !false && (
            <TableComponent
              headers={tableHeader}
              tableRow={{
                style: '',
                handleRowClick: () => {},
              }}
              body={tableData}
            />
          )}
          {totalUser > 10 && (
            <Pagination
              resetPage={resetPage}
              recordsPerPage={recordsPerPage}
              setRecordsPerPage={(records) => setRecordsPerPage(records)}
              setCurrentPage={(page) => {
                setCurrentPage(page);
              }}
              pageCount={pageCount}
              currentPage={currentPage}
              selectedPage={Number(searchParams.get('page'))}
              handlePagination={handlePagination}
              handlePageSize={handlePageSize}
            />
          )}
          {isCreateUserOpen && (
            <AddUser
              closeUserAdd={() => {
                setCreateUserOpen(false);
              }}
            />
          )}
          {edit && (
            <AddUser
              closeUserAdd={() => {
                setCreateUserOpen(false);
                setEdit('');
              }}
              edit={edit}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default UserList;
