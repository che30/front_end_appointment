import axios from 'axios';
import { USER_IS_CREATED, USER_IS_NOT_CREATED } from '../actions';
import { loalBackEndUrl } from '../helpers/backEndURI';
import { setLocalStorage } from '../helpers/localStorage';

const createUser = (credentials) => async function createUserThunk(dispatch) {
  const {
    firstName, lastName, email, password, passwordConfirmation,
  } = credentials;
  try {
    const response = await axios.post(`${loalBackEndUrl()}/signup`,

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
    dispatch({ type: USER_IS_CREATED, status: true });
  } catch (error) {
    console.log(error.response.data.errors);
    dispatch({ type: USER_IS_NOT_CREATED, msg: error.response.data.errors, status: false });
  }
};
export default createUser;
