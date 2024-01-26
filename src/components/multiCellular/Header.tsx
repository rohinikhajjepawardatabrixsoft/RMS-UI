import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import STRINGS from '../../constants/strings/common/Strings';
import expireToken from '../../Containers/login/helper';

const Header = (): ReactElement => {
  const navigate = useNavigate();
  const gotoSettings = () => {
    navigate('/settings');
  };

  return (
    <div className="w-full bg-[#FFFFFF] drop-shadow-md">
      <div className="h-16 top-0">
        {/* <div className="flex items-center h-16 top-0 justify-end mr-4">
          <ul className="menu menu-horizontal mb-0 flex items-center">
            <li>
              <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  {sessionStorage.getItem('user')?.split(' ')[0].charAt(0).toUpperCase()}
                </span>
              </div>
            </li>
            <li className="w-52">
              <div className="dropdown bg-[#FFFFFF]">
                <label tabIndex={0} className="flex">
                  <a className="text-[#323947] ">{sessionStorage.getItem('user')?.split(' ')[0]}</a>
                  <span className="pl-2 cursor-pointer">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </label>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content p-2 shadow w-36 bg-[#FFFFFF] rounded-box mt-36 text-black"
                >
                  <li className="hidden">
                    <a
                      className="hover:w-full hover:bg-gray_10 bg-[#FFFFFF]"
                      onClick={gotoSettings}
                    >
                      {STRINGS.SETTINGS}
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      navigate('/user-profile');
                    }}
                  >
                    <a className="hover:w-full hover:bg-gray_10 bg-[#FFFFFF]">{STRINGS.ACCOUNT}</a>
                  </li>
                  <li
                    onClick={() => {
                      expireToken();
                      navigate('/login');
                    }}
                  >
                    <a className="hover:w-full hover:bg-gray_10 bg-[#FFFFFF]">{STRINGS.LOGOUT}</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};


export default Header;
