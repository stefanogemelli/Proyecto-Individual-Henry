import { Switch, Route } from "react-router-dom";

import "./App.css";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/detail/:idCountry" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
