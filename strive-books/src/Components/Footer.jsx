import { Navbar, Container } from "react-bootstrap";

const FooterPart = () => (
  <Navbar expand="lg" style={{ backgroundColor: "grey", color: "black" }}>
    <Container>
      <Navbar.Brand class="ml-auto">
        <small>
          Conditions of Use & SalePrivacy Notice Interest-Based Ads Notice
          ©2016-2021,strivebookstore.com, Inc. or its affiliates{" "}
        </small>
      </Navbar.Brand>
    </Container>
  </Navbar>
);
export default FooterPart;
