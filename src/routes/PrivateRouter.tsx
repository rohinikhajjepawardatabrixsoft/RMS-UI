import { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = (): ReactElement => {
  const auth = sessionStorage.getItem('token');
  return !auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
