import axios from 'axios';
import { USER_IS_CREATED, USER_IS_NOT_CREATED } from '../actions';
import { loalBackEndUrl } from '../helpers/backEndURI';
import { setLocalStorage } from '../helpers/localStorage';

const loginUser = (credentials) => async function loginUserThunk(dispatch) {
  const {
    email, password,
  } = credentials;
  try {
    const response = await axios.post(`${loalBackEndUrl()}/auth/login`,

      {
        user: {
          email,
          password,
        },
      });
    setLocalStorage(response.data.auth_token);
    dispatch({ type: USER_IS_CREATED, loggedIn: true });
  } catch (error) {
    dispatch({ type: USER_IS_NOT_CREATED, msg: error.response.data.errors, loggedIn: false });
  }
};
export default loginUser;
