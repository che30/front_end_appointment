/* eslint-disable prefer-destructuring */
import jwtDecode from 'jwt-decode';
import { Outlet } from 'react-router-dom';
import Login from './containers/Login';

const useAuth = () => {
  const user = { loggedIn: false };
  let decoded;
  let token;
  if (JSON.parse(localStorage.getItem('auth_token')) !== null) {
    token = JSON.parse(localStorage.getItem('auth_token'))[0];
    decoded = jwtDecode(token);
    if (decoded.exp > Date.now() / 1000) {
      user.loggedIn = true;
    }
  }
  return user && user.loggedIn;
};
const ProtectedRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Login />;
};

export default ProtectedRoute;
