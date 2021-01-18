import "../styles/App.css";
import { NavBar } from "./NavBar";
import { AnalogClock } from "./AnalogClock";
import { Gallery } from "./Gallery";
import { GifApp } from "./GifApp";

function App() {
  return (
    <div className="App">
      <AnalogClock></AnalogClock>
      <NavBar></NavBar>
      <Gallery />
      <GifApp></GifApp>
    </div>
  );
}

export default App;
