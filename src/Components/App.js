import "../styles/App.css";
import { NavBar } from "./NavBar";
import { AnalogClock } from "./AnalogClock";
import { Gallery } from "./Gallery";
import { SearchForm } from "./SearchForm";
import { useFetchGifs } from "../Hooks/useFetchGifs";
import { useIChing } from "../Hooks/useIChing";



function App() {
  const gifSearchProps = {
    type: "Gifs",
    hook: useFetchGifs,
    placeholder: "Looking for gifs?"
  };
  const iChingSearchProps = {
    type: "IChing",
    hook: useIChing,
    placeholder: "Ask to the oraculum"
  };
  return (
    <div className="App">
      <AnalogClock></AnalogClock>
      <NavBar></NavBar>
      <Gallery />
      <SearchForm {...gifSearchProps}>Gifs Search Engine</SearchForm>
      <SearchForm {...iChingSearchProps}>I-Ching Oraculum</SearchForm>
    </div>
  );
}

export default App;
