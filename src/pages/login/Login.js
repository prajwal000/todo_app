import React from "react";
import Navbar from "../mainPage/Navbar";
import {
  Link,
  Route,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

function Login() {
  const history = useHistory();
  return (
    <>
      <Navbar />
      <div className="todo_container">
        {localStorage.getItem("loggedin") ? (
          <div>
            You are already logged in
            <br />
            <b
              onClick={() => {
                localStorage.removeItem("loggedin");
                history.push("/");
              }}
              style={{ color: "red", margin: "10px", cursor: "pointer" }}
            >
              Log Out
            </b>
          </div>
        ) : (
          <div>
            <button
              onClick={() => {
                localStorage.setItem("loggedin", true);
                alert("you are sucessfully loged in!");
                history.replace("/");
              }}
            >
              login
            </button>
            <br />
            <Link to="/login/showInfo"> Nested route |Show info</Link>
            <br />
            <Link to="/login">hide Login info</Link>
            <Route path="/login/showInfo">
              <div>
                This is the dummy login does not communicate with the server
              </div>
            </Route>
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
