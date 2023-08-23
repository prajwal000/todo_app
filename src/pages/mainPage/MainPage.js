import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./Navbar";
import { FiEye } from "react-icons/fi";
const MainPage = () => {
  const getTodo = JSON.parse(localStorage.getItem("todo"))
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
  return (
    <>
      <Navbar />
      <div className="todo_container">
        <h3>Your to-do</h3>
        {getTodo.map((ab, index) => (
          <>
            <div className="single_todo">
              {ab}
              <Link to={`/view/${index}`}>
                <FiEye size={"20px"} />{" "}
              </Link>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default MainPage;
