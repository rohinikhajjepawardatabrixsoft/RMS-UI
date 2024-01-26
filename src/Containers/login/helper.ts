const expireToken = () => {
  sessionStorage.removeItem('token');
  localStorage.removeItem('token');
  localStorage.removeItem('lastPathname');
  sessionStorage.removeItem('user');
  sessionStorage.removeItem('userId');
  sessionStorage.removeItem('userType');
};
export default expireToken;
