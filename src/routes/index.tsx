import React, { ReactElement, useContext } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { routes } from './Config';
import PrivateRouter from './PrivateRouter';
import Login from '../Containers/login';
import AppLayout from '../Containers/AppLayout';

const AppRoutes = (): ReactElement => {
  const navigate = useNavigate();
  const tempJson = { value: '', expires: '' };
  const tokenData = JSON.parse(localStorage.getItem('token') || JSON.stringify(tempJson));

  return (
    <div>
      { (
        <Routes>
          {/* <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} /> */}
          <Route element={<PrivateRouter />}>
            {routes.map(({ path, name, component: Component, isPublic }) => (
              <Route
                key={name}
                path={path}
                element={
                  <AppLayout isPublic={isPublic}>
                    <Component />
                  </AppLayout>
                }
              />
            ))}
          </Route>
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
