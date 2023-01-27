import { Switch, Route, useLocation } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Activities from "./pages/Activities/Activities";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      <div className="bgCapa"></div>

      {pathname !== "/" && (
        <>
          <NavBar />
          <div className="navSpace"></div>
        </>
      )}

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/detail/:idCountry" component={Detail} />
        <Route exact path="/activities" component={Activities} />
      </Switch>
    </div>
  );
}

export default App;
