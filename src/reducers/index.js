import { combineReducers } from 'redux';
import captureUserCredentials from './captureUserCredentials';

const rootReducer = () => combineReducers({
  captureUserCredentials,
});
export default rootReducer;
