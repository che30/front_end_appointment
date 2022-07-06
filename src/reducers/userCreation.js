import { USER_IS_CREATED, USER_IS_NOT_CREATED } from '../actions';

const initialState = {
  created: false,
  message: '',
};
const creatingUser = (state = initialState, action) => {
  switch (action.type) {
    case USER_IS_CREATED:
      return {
        ...state,
        status: action.status,
      };
    case USER_IS_NOT_CREATED:
      return {
        ...state,
        status: action.status,
        message: action.msg,
      };
    default:
      return state;
  }
};
export default creatingUser;
