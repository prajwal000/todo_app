import Navbar from "./Navbar";

const MainPage = () => {
  const getTodo = JSON.parse(localStorage.getItem("todo"))
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
  return (
    <>
      <Navbar />
      <div className="todo_container">
        <h3>Your to-do</h3>
        {getTodo.map((ab) => (
          <>
            <div className="single_todo">{ab}</div>
          </>
        ))}
      </div>
    </>
  );
};
export default MainPage;
