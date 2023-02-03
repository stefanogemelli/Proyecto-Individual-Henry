import { Switch, Route, useLocation } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import About from "./pages/About/About";
import Activities from "./pages/Activities/Activities";
import Detail from "./pages/Detail/Detail";
import Error404 from "./pages/Error404/Error404";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import UpdateActivity from "./pages/UpdateActivity/UpdateActivity";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname !== "/" && (
        <>
          <NavBar />
          <div className="navSpace"></div>
          <div className="bg">
            <div className="bgCapa"></div>
          </div>
        </>
      )}

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/detail/:idCountry" component={Detail} />
        <Route exact path="/activities" component={Activities} />
        <Route
          exact
          path="/activities/update/:idActivity"
          component={UpdateActivity}
        />
        <Route exact path="/about" component={About} />
        <Route path="/*" component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
