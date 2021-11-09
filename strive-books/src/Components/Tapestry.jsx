import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import books from "../data/scifi.json";

const TapestryThing = () => (
  <Container>
    <Row>
      <Col xs={12} md={3} lg={2} className="text-center">
        {books.map((bookObject) => (
          <Card.Img key={bookObject.asin} variant="top" src={bookObject.img} />
        ))}
      </Col>
    </Row>
  </Container>
);
export default TapestryThing;
