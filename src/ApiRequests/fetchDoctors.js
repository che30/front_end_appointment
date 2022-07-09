import axios from 'axios';
import { loalBackEndUrl } from '../helpers/backEndURI';

const fetchDoctors = async () => {
  const token = JSON.parse(localStorage.getItem('auth_token'))[0];
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get(`${loalBackEndUrl()}/api/doctors`,
    config);
  return response;
};
export default fetchDoctors;
