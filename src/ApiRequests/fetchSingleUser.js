import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { remoteBackEndUrl } from '../helpers/backEndURI';

const fetchSingleUser = async () => {
  const token = JSON.parse(localStorage.getItem('auth_token'))[0];
  const userId = jwtDecode(token).user_id;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get(`${remoteBackEndUrl()}/users/${userId}`,
    config);
  return response;
};
export default fetchSingleUser;
