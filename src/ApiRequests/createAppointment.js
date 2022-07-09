import axios from 'axios';
import { loalBackEndUrl } from '../helpers/backEndURI';

const createAppointment = async (credentials) => {
  const config = {
    headers: { Authorization: `Bearer ${credentials.token}` },
  };
  try {
    const response = await axios.post(`${loalBackEndUrl()}/api/users/${credentials.userId}/appointments`,
      {
        appointment:
    {
      message: credentials.message,
      doctor_id: credentials.chosenDocId,
      user_id: credentials.userId,
      date_of_appointment: credentials.meetingDate,
    },
      },
      config);
    return response;
  } catch (error) {
    console.log(error.response.data.errors);
  }
  return true;
};
export default createAppointment;
