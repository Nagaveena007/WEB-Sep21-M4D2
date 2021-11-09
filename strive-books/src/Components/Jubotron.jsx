import { Container, Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const JumbotronElement = () => (
  <Jumbotron fluid>
    <Container>
      <h1>Fluid jumbotron</h1>
      <p>
        This is a modified jumbotron that occupies the entire horizontal space
        of its parent.
      </p>
    </Container>
  </Jumbotron>
);
export default JumbotronElement;
