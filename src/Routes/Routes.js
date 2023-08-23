import { Route } from "react-router-dom/cjs/react-router-dom.min";
import MainPage from "../pages/mainPage/MainPage";
import AddTodo from "../pages/add-Todo/AddTodo";
import ViewPage from "../pages/View/ViewPage";

const Routes = () => {
  return (
    <>
      <Route path="/" component={MainPage} exact />
      <Route path="/add" component={AddTodo} exact />
      <Route path="/view/:id" component={ViewPage} exact />
    </>
  );
};
export default Routes;
