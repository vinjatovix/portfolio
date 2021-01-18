import "./App.css";
import { NavBar } from "./Components/NavBar";
import { AnalogClock } from "./Components/AnalogClock";
import { Gallery } from "./Components/Gallery";

function App() {
  return (
    <div className="App">
      <AnalogClock></AnalogClock>
      <NavBar></NavBar>
      <Gallery />
    </div>
  );
}

export default App;
