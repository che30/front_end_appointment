import {
  CAPTURE_FIRST_NAME,
  CAPTURE_LAST_NAME,
  CAPTURE_USER_EMAIL,
  CAPTURE_USER_PASSWORD,
} from '../actions';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};
const captureUserCredentials = (state = initialState, action) => {
  switch (action.type) {
    case CAPTURE_FIRST_NAME:
      return {
        ...state,
        firstname: action.firstname,
      };
    case CAPTURE_LAST_NAME:
      return {
        ...state,
        lastname: action.lastname,
      };
    case CAPTURE_USER_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case CAPTURE_USER_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    default:
      return state;
  }
};
export default captureUserCredentials;
