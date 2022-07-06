import jwtDecode from 'jwt-decode';
import { Outlet } from 'react-router-dom';
import Login from './containers/Login';

const useAuth = () => {
  const token = JSON.parse(localStorage.getItem('auth_token'))[0];
  const user = { loggedIn: false };
  let decoded;
  if (token !== null) {
    decoded = jwtDecode(token);
  }
  if (decoded.exp > Date.now() / 1000) {
    user.loggedIn = true;
  }
  return user && user.loggedIn;
};
const ProtectedRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Login />;
};

export default ProtectedRoute;
