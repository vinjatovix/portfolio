import "../styles/App.css";
import { NavBar } from "./NavBar";
import { AnalogClock } from "./clock/AnalogClock";
import { Gallery } from "./Gallery";
import { SearchForm } from "./SearchForm";
// import { useFetchGifs } from "../Hooks/useFetchGifs";
import { useIChing } from "../Hooks/useIChing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // const gifSearchProps = {
  //   type: "Gifs",
  //   hook: useFetchGifs,
  //   placeholder: "Looking for gifs?",
  // };
  const iChingSearchProps = {
    type: "IChing",
    hook: useIChing,
    placeholder: "¿Qué es lo que te inquieta amigo?",
  };
  return (
    <div className="App">
      <Router>
        <AnalogClock></AnalogClock>
        <NavBar></NavBar>
        <Switch>
          <Route path="/gallery">
            <Gallery />
          </Route>

          {/* <Route path="/gifs"> */}
            {/* <SearchForm {...gifSearchProps}>Gifs Search Engine</SearchForm> */}
          {/* </Route> */}
          <Route path="/iching">
            <p>Por favor. Usa este oráculo con precaución.</p>
            <SearchForm {...iChingSearchProps}>Oráculo del I Ching</SearchForm>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
