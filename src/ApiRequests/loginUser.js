import axios from 'axios';
import { IS_IT_DOCTOR_OR_PATIENT, USER_IS_CREATED, USER_IS_NOT_CREATED } from '../actions';
import { remoteBackEndUrl } from '../helpers/backEndURI';
import { setLocalStorage } from '../helpers/localStorage';

const loginUser = (credentials) => async function loginUserThunk(dispatch) {
  const {
    email, password,
  } = credentials;
  try {
    const response = await axios.post(`${remoteBackEndUrl()}/auth/login`,

      {
        user: {
          email,
          password,
        },
      });
    dispatch({
      type: USER_IS_CREATED,
      loggedIn: true,
    });
    dispatch({
      type: IS_IT_DOCTOR_OR_PATIENT,
      status: response.data.patient,
    });
    setLocalStorage(response.data.auth_token);
  } catch (error) {
    dispatch({ type: USER_IS_NOT_CREATED, msg: error.response.data.message, loggedIn: false });
  }
};
export default loginUser;
