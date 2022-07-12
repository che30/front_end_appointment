import axios from 'axios';
import { IS_IT_DOCTOR_OR_PATIENT, USER_IS_CREATED, USER_IS_NOT_CREATED } from '../actions';
import remoteBackEndUrl from '../helpers/backEndURI';
import { setLocalStorage } from '../helpers/localStorage';

const createUser = (credentials) => async function createUserThunk(dispatch) {
  const {
    firstName, lastName, email, password, passwordConfirmation,
  } = credentials;
  try {
    const response = await axios.post(`${remoteBackEndUrl()}/signup`,

      {
        user: {
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          password_confirmation: passwordConfirmation,
        },
      });
    setLocalStorage(response.data.auth_token);
    dispatch({ type: USER_IS_CREATED, loggedIn: true });
    dispatch({ type: IS_IT_DOCTOR_OR_PATIENT, status: response.data.user.patient });
  } catch (error) {
    dispatch({ type: USER_IS_NOT_CREATED, msg: error.response.data.errors, loggedIn: false });
  }
};
export default createUser;
