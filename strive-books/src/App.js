import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navbar";
import FooterPart from "./Components/Footer";
import { Jumbotron } from "react-bootstrap";
import TapestryThing from "./Components/Tapestry";

function App() {
  return (
    <div className="App">
      <Navigation brand="Strive-Books" />
      <Jumbotron />
      <TapestryThing />
      <FooterPart />
    </div>
  );
}

export default App;
