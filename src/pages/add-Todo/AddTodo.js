import { useRef } from "react";
import Navbar from "../mainPage/Navbar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddTodo = () => {
  const todoText = useRef();
  const history = useHistory();
  const addTodo = (e) => {
    e.preventDefault();
    const todoString = todoText.current.value;
    const initialTodo = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];
    initialTodo.push(todoString);
    localStorage.setItem("todo", JSON.stringify(initialTodo));
    history.push("/");
  };
  return (
    <>
      <Navbar />
      <div className="todo_container">
        <h1>Add to-do</h1>
        <form onSubmit={addTodo}>
          <input type="text" ref={todoText} />
          <button>Save to-do</button>
        </form>
      </div>
    </>
  );
};
export default AddTodo;
