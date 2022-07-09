import axios from 'axios';
import { loalBackEndUrl } from '../helpers/backEndURI';

const fetchAppointments = async (credentials) => {
  const config = {
    headers: { Authorization: `Bearer ${credentials.token}` },
  };
  const response = await axios.get(`${loalBackEndUrl()}/api/users/${credentials.userId}/appointments`,
    config);
  return response;
};
export default fetchAppointments;
