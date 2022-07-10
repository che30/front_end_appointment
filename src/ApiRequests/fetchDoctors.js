import axios from 'axios';
import { remoteBackEndUrl } from '../helpers/backEndURI';

const fetchDoctors = async () => {
  const token = JSON.parse(localStorage.getItem('auth_token'))[0];
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get(`${remoteBackEndUrl()}api/doctors`,
    config);
  return response;
};
export default fetchDoctors;
