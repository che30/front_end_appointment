import axios from 'axios';
import jwtDecode from 'jwt-decode';
// import { remoteBackEndUrl } from '../helpers/backEndURI';

const fetchAppointments = async (credentials) => {
  const token = JSON.parse(localStorage.getItem('auth_token'))[0];
  const userId = jwtDecode(token).user_id;
  const config = {
    headers: { Authorization: `Bearer ${credentials.token}` },
  };
  const response = await axios.get(`https://appointmentendpoints.herokuapp.com/api/users/${(userId)}/appointments`,
    config);
  return response;
};
export default fetchAppointments;
