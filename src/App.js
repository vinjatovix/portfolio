import "./App.css";
import { Clock } from "./Components/Clock";
import { NavBar } from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Clock></Clock>
    </div>
  );
}

export default App;
