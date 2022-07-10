import axios from 'axios';
import { remoteBackEndUrl } from '../helpers/backEndURI';

const fetDoctorAppointments = async () => {
  const token = JSON.parse(localStorage.getItem('auth_token'))[0];
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get(`${remoteBackEndUrl()}/api/doctorAppointments`,
    config);
  return response;
};
export default fetDoctorAppointments;
