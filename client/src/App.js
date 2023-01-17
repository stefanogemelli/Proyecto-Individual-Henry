import { Switch, Route, useLocation } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Create from "./pages/Create/Create";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";

function App() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="App">
      {pathname !== "/" && <NavBar />}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/detail/:idCountry" component={Detail} />
        <Route exact path="/create" component={Create} />
      </Switch>
    </div>
  );
}

export default App;
