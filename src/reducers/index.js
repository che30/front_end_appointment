import { combineReducers } from 'redux';
import captureUserCredentials from './captureUserCredentials';
import creatingUser from './userCreation';

const rootReducer = () => combineReducers({
  captureUserCredentials,
  creatingUser,
});
export default rootReducer;
