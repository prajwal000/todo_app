import { Route } from "react-router-dom/cjs/react-router-dom.min";
import MainPage from "../pages/mainPage/MainPage";
import AddTodo from "../pages/add-Todo/AddTodo";

const Routes = () => {
  return (
    <>
      <Route path="/" component={MainPage} exact />
      <Route path="/add" component={AddTodo} />
    </>
  );
};
export default Routes;