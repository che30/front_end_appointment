const getLocalStorage = () => {
  JSON.parse(localStorage.getItem('auth_token'));
};
const setLocalStorage = (auth) => {
  const authorization = getLocalStorage() || [];
  authorization.push(auth);
  localStorage.setItem('auth_token', JSON.stringify(authorization));
};
const clearLocalStorage = () => {
  localStorage.clear();
  window.location.replace('/Login');
};
export { getLocalStorage, setLocalStorage, clearLocalStorage };
