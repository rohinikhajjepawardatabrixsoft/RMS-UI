import React, { ReactElement, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header, SideBar } from '../components/multiCellular';

import Menus from '../config/Sidebar';
import useGlobalUtilityState from '../store/globalStore';

type AppLayoutProps = {
  children: React.ReactNode;
  isPublic?: boolean;
};

const AppLayout = ({ children, isPublic }: AppLayoutProps): ReactElement => {
  const { globalUtilityState } = useGlobalUtilityState();
  const location = useLocation();
  useEffect(() => {
    if (!location.pathname.includes('questions'))
      localStorage.setItem('lastPathname', location.pathname);
  }, [location.pathname]);
  useEffect(() => {
    if (Menus.some((menu:any) => menu.link === location.pathname)) {
      globalUtilityState.campusSummaryTab.set(0);
      globalUtilityState.studentDetailsTab.set(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return (
    <div className="flex w-screen overflow-hidden bg-gray_10">
      {!isPublic && <SideBar />}
      <div className="w-screen">
        <div className="flex flex-col relative h-full overflow-hidden bg-[#F8F8F8]">
          {!isPublic && <Header />}
          <div className="w-full bg-[#F8F8F8] h-screen">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
