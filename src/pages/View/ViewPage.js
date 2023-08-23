import React from "react";
import Navbar from "../mainPage/Navbar";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

function ViewPage() {
  const history = useHistory("");
  const params = useParams();
  const getId = params.id;
  const getStorage = JSON.parse(localStorage.getItem("todo")) || [];
  const getData = getStorage[getId];
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
      </div>
    </>
  );
}

export default ViewPage;
