import React from "react";
import Navbar from "../mainPage/Navbar";
import {
  Link,
  useHistory,
  // useLocation,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import AuthCheckBoolean from "../../middleware/AuthCheckBoolean";

function ViewPage() {
  const history = useHistory("");
  const params = useParams();

  const getId = params.id;
  const getStorage = JSON.parse(localStorage.getItem("todo")) || [];
  const getData = getStorage[getId];
  const deleteTodo = () => {
    history.replace("/");
    getStorage.splice(getId, 1);
    localStorage.setItem("todo", JSON.stringify(getStorage));
  };
  return (
    <>
      <Navbar />
      <div className="todo_container">
        <button
          onClick={() => {
            history.push("/");
          }}
          style={{ background: "#e7e7e7", color: "#666" }}
        >
          go back
        </button>
        <div
          style={{
            background: "#e7e7e7",
            padding: "15px",
            fontSize: "17px",
            margin: "20px",
          }}
        >
          {getData}
        </div>
        {AuthCheckBoolean() ? (
          <div>
            <button style={{ background: "red" }} onClick={deleteTodo}>
              Delete To-Do
            </button>
          </div>
        ) : (
          <div>
            Login to see more options
            <Link to="/login">Login Now</Link>
          </div>
        )}
      </div>
    </>
  );
}

export default ViewPage;
