import "./App.css";

import { Route, Switch, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./view/Home/Home";
import LandingPage from "./view/LandingPage/LandingPage";
import Detail from "./view/Detail/Detail";
import Form from "./view/Form/Form";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/home" && <NavBar />}

      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/detail/:id" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
