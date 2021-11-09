import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navbar";
import FooterPart from "./Components/Footer";
import JumbotronElement from "./Components/Jubotron";
import TapestryThing from "./Components/Tapestry";

function App() {
  return (
    <div className="App">
      <Navigation brand="Strive-Books" />
      <JumbotronElement />
      <TapestryThing />
      <FooterPart />
    </div>
  );
}

export default App;
