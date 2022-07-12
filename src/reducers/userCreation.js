import { IS_IT_DOCTOR_OR_PATIENT, USER_IS_CREATED, USER_IS_NOT_CREATED } from '../actions';

const initialState = {
  created: false,
  message: '',
  loggedIn: false,
  patient: false,
};
const creatingUser = (state = initialState, action) => {
  switch (action.type) {
    case USER_IS_CREATED:
      return {
        ...state,
        loggedIn: action.loggedIn,
        patient: action.userIsDoctor,
      };
    case USER_IS_NOT_CREATED:
      return {
        ...state,
        loggedIn: action.loggedIn,
        message: action.msg,
      };
    case IS_IT_DOCTOR_OR_PATIENT:
      return {
        ...state,
        patient: action.status,
      };
    default:
      return state;
  }
};
export default creatingUser;
