import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import MainPage from "../pages/mainPage/MainPage";
import AddTodo from "../pages/add-Todo/AddTodo";
import ViewPage from "../pages/View/ViewPage";
import Login from "../pages/login/Login";
import Notfound from "../pages/notfound/Notfound";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={MainPage} exact />
        <Route path="/login" component={Login} />
        <Route path="/add" component={AddTodo} exact>
          <AddTodo />
        </Route>

        <Route path="/view/:id" component={ViewPage} exact />
        <Route path="*">
          <Notfound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
