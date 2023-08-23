import {
  BrowserRouter,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import "./styles/App.css";
import Routes from "./Routes/Routes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Routes></Routes>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
