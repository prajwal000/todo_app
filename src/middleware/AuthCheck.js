import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AuthCheck = () => {
  const history = useHistory();
  //   if (localStorage.getItem("loggedin")) {
  //   } else {
  //     history.replace("/login");
  //   }
  !localStorage.getItem("loggedin") && history.replace("/login");
  //   localStorage.getItem("loggedin") ? (() => {})() : history.replace("/login");
};
export default AuthCheck;
