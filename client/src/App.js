import NavBar from "./components/NavBar/NavBar";
import { Suspense, lazy } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.css";
const Home = lazy(() => import("./pages/Home/Home"));
const Landing = lazy(() => import("./pages/Landing/Landing"));

const About = lazy(() => import("./pages/About/About"));
const Activities = lazy(() => import("./pages/Activities/Activities"));
const Detail = lazy(() => import("./pages/Detail/Detail"));
const Error404 = lazy(() => import("./pages/Error404/Error404"));

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

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/detail/:idCountry" component={Detail} />
          <Route exact path="/activities" component={Activities} />
          <Route exact path="/about" component={About} />
          <Route path="/*" component={Error404} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
