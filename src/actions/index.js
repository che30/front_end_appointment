const CAPTURE_FIRST_NAME = 'CAPTURE FIRST NAME';
const CAPTURE_LAST_NAME = 'CAPTURE LAST NAME';
const CAPTURE_USER_EMAIL = 'CAPTURE USEREMAIL';
const CAPTURE_USER_PASSWORD = 'CAPTURE USER PASSWORD';
const USER_IS_CREATED = 'USER CREATED';
const USER_IS_NOT_CREATED = 'USER IS NOT CREATED';
const IS_IT_DOCTOR_OR_PATIENT = 'IS IT DOCTOR OR PATIENT';
const captureFirstName = (firstname) => ({
  type: CAPTURE_FIRST_NAME,
  firstname,
});
const captureLastName = (lastname) => ({
  type: CAPTURE_LAST_NAME,
  lastname,
});
const captureUserEmail = (email) => ({
  type: CAPTURE_USER_EMAIL,
  email,
});
const captureUserPassword = (password) => ({
  type: CAPTURE_USER_PASSWORD,
  password,
});
const userCreated = (loggedIn) => ({
  type: USER_IS_CREATED,
  loggedIn,
});
const isItDoctorOrPatient = (status) => ({
  type: IS_IT_DOCTOR_OR_PATIENT,
  status,
});
const userNotCreated = (msg, loggedIn) => ({
  type: USER_IS_NOT_CREATED,
  msg,
  loggedIn,
});
export {
  captureFirstName,
  captureLastName,
  captureUserEmail,
  captureUserPassword,
  userCreated,
  userNotCreated,
  isItDoctorOrPatient,
  CAPTURE_FIRST_NAME,
  CAPTURE_USER_EMAIL,
  CAPTURE_LAST_NAME,
  CAPTURE_USER_PASSWORD,
  USER_IS_CREATED,
  USER_IS_NOT_CREATED,
  IS_IT_DOCTOR_OR_PATIENT,
};
