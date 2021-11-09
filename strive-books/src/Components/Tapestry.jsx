import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import books from "../data/scifi.json";

const TapestryThing = () => (
  <Container>
    <Row>
      {books.map((bookObject) => (
        <Col xs={12} md={3} lg={2} className="w-100">
          <Card style={{ width: "11rem" }}>
            <Card.Img
              className="w-100"
              style={{ height: "250px" }}
              key={bookObject.asin}
              variant="top"
              src={bookObject.img}
            />
            <Card.Body>
              <Card.Title>{}</Card.Title>

              <Button className="mr-auto" variant="warning">
                Buy
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);
export default TapestryThing;
