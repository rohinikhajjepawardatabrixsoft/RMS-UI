import React, { ReactElement, useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import dropdown from '../../assets/svgs/dropdown.svg';
import MenuIcon from '../../assets/svgs/MenuIcon';
import FeedbackIcon from '../../assets/svgs/FeedbackIcon';
import Menus from '../../config/Sidebar';
import DashboardIcon from '../../assets/svgs/DashboardIcon';
import CoursesIcon from '../../assets/svgs/CoursesIcon';
import StudentIcon from '../../assets/svgs/StudentIcon';
import BatchesIcon from '../../assets/svgs/Batches';
import FeesIcon from '../../assets/svgs/FeesIcon';
import SettingsIcon from '../../assets/svgs/SettingsIcon';
import AttendanceIcon from '../../assets/svgs/Attendance';
import InstructorIcon from '../../assets/svgs/Instructor';
import CampusIcon from '../../assets/svgs/CampusIcon';
import ReviewIcon from '../../assets/svgs/Review';
// import { Admin, AdminDetails, GET_ADMIN_DETAILS } from '../../containers/batches/graphql/query';
import UserIcon from '../../assets/svgs/UserIcon';
import CalenderIcon2 from '../../assets/svgs/CalenderIcon2';

const SideBar = (): ReactElement => {
  // const [admins, setAdmins] = useState<Admin[]>();
  // useQuery(GET_ADMIN_DETAILS, {
  //   onCompleted(data: AdminDetails) {
  //     setAdmins(data.getAdmins);
  //   },
  // });
  const [open, setOpen] = useState(true);
  const [submenuOpen, setsubmenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubmenu] = useState('');
  const location = useLocation();

  const renderMenuIcon = (pageName: string): ReactElement => {
    switch (pageName) {
      case 'Dashboard':
        return <DashboardIcon />;
      case 'Courses':
        return <CoursesIcon />;
      case 'Campus':
        return <CampusIcon />;
      case 'Students':
        return <StudentIcon />;
      case 'Batches':
        return <BatchesIcon />;
      case 'Reviews':
        return <ReviewIcon />;
      case 'Fees':
        return <FeesIcon />;
      case 'Attendance':
        return <AttendanceIcon />;
      case 'Instructor':
        return <InstructorIcon />;
      case 'Settings':
        return <SettingsIcon />;
      case 'Users':
        return <UserIcon />;
      case 'Feedbacks':
        return <FeedbackIcon />;
      case 'Calender':
        return <CalenderIcon2 />;
      default:
        return <MenuIcon />;
    }
  };
  const handleOpen = (): void => {
    if (open) {
      setsubmenuOpen(false);
    }
    setOpen(!open);
  };
  const handleSubmenuOpen = (isMenuOpen: any, title: string): void => {
    if (!open && isMenuOpen) {
      setOpen(true);
    }
    if (isMenuOpen) {
      setActiveSubmenu(title);
      setsubmenuOpen(!submenuOpen);
    }
  };
  const roundedArrow = (): ReactElement => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 content-center cursor-pointer absolute -right-10 top-5 z-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#323947"
        onClick={handleOpen}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h7"
        />
      </svg>
    );
  };
  // const checkAdmin = () => {
  //   const currentUser = sessionStorage.getItem('userId');
  //   if (admins?.some((admin) => admin.id === currentUser)) return true;
  //   return false;
  // };

  // checkAdmin();


  return (
    <div className={`bg-[#323947] ${open ? 'min-w-[18rem]' : 'w-[6rem]'} relative `}>
      {roundedArrow()}
      <div className={`flex justify-start pl-5 pt-3 content-center h-[4rem]  w-full`}>
        {/* <img src={logo} alt="" className={`${open ? 'w-[10rem] ' : 'w-[4rem] '} `} /> */}
      </div>
      <div className=" pt-8 overflow-y-scroll h-[calc(100vh_-_5rem)] scrollbar-hide">
        <div className="pt-2 pl-4">
          {Menus.map((menu, index) => {

            return (
              <div key={index?.toString()}>
                <NavLink
                  to={menu.submenu ? location.pathname : `${menu?.link}${menu.params}`}
                  key={index?.toString()}
                  className={({ isActive }) =>
                    !isActive ? 'opacity-50 hover:opacity-100 ' : 'opacity-100'
                  }
                >
                  <li
                    key={index?.toString()}
                    className={`text-gray-300 text-base flex font-medium content-center gap-x4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ${
                      menu.submenu && 'opacity-50 hover:opacity-100'
                    }`}
                    onClick={() => handleSubmenuOpen(menu.submenu, menu.title)}
                  >
                    <div className="border rounded border-gray-700  p-1 hover:bg-gray-600">
                      {renderMenuIcon(menu.title)}
                    </div>
                    <div
                      className={`${open ? 'ml-4' : 'ml-8'} w-44 text-lg leading-none self-center`}
                    >
                      {open && menu.title}
                    </div>
                    {open && menu.submenu && (
                      <div className="self-center">
                        <img
                          src={dropdown}
                          alt=""
                          className={`${
                            submenuOpen && activeSubMenu === menu.title ? 'rotate-0' : 'rotate-[270deg]'
                          }`}
                        />
                      </div>
                    )}
                  </li>
                </NavLink>
                {open && menu.submenu && submenuOpen && activeSubMenu === menu.title && (
                  <div className="pl-[1.3rem]">
                    {menu.submenuItems.map((submenuItem, ind) => {
                      // if (submenuItem.title === 'Payments' && !hasPaymentSettingsAccess)
                      //   return null;
                      // if (submenuItem.title === 'Courses' && !hasParticularSettingsAccess)
                      //   return null;
                      // if (submenuItem.title === 'Students' && !hasStudentSettingsAccess)
                      //   return null;

                      // if (submenuItem.title === 'Alert Config' && !hasStudentSettingsAccess)
                      //   return null;

                      return (
                        <NavLink
                          to={`${submenuItem?.link}${submenuItem.params}`}
                          key={ind?.toString()}
                          className={({ isActive }) =>
                            !isActive ? 'opacity-50 hover:opacity-100 ' : 'opacity-100'
                          }
                        >
                          <li className="text-gray-300 ml-8 text-base flex content-center gap-x4 cursor-pointer p-2 hover:bg-light-white rounded-md">
                            <div className="self-center">{submenuItem?.title}</div>
                          </li>
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SideBar;
