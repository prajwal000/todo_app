const AuthCheckBoolean = () => {
  let loggedin = false;
  if (localStorage.getItem("loggedin")) {
    loggedin = true;
  }
  return loggedin;
};
export default AuthCheckBoolean;
