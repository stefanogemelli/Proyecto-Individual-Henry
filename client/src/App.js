import { Switch, Routes, Route, useLocation } from "react-router-dom";

import styled from "styled-components";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CreateActivity from "./pages/CreateActivity/CreateActivity";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";

function App() {
  console.log(Switch);
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname !== "/" && <NavBar />}
      {/* <Random></Random> */}

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/detail/:idCountry" component={Detail} />
        <Route exact path="/createactivity" component={CreateActivity} />
      </Switch>
    </div>
  );
}

export default App;

const Random = styled.div`
  height: 1000px;

  width: 800px;
  background-color: red;
`;
