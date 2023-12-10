import React from "react";
import {
  Container,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Col,
  Row,
} from "react-bootstrap";

const MyMenu = () => {
  const whatsappURL =
    (navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
      ? "whatsapp://"
      : "https://web.whatsapp.com/") + "send?phone=972515568919";

  const MyNavLink = (props) => (
    <Nav.Link {...props} className="text-center">
      <h3 style={{ fontWeight: "bold" }}>{props.children}</h3>
    </Nav.Link>
  );

  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container fluid>
        <Nav className="text-center">
          <Row style={{ marginTop: "0" }} id="menuRow">
            <Col lg="auto" md="auto" sm="auto" xs="auto">
              <MyNavLink href={whatsappURL}>ווטסאפ</MyNavLink>
            </Col>
            <Col lg="auto" md="auto" sm="auto" xs="auto">
              <MyNavLink href="tel:0515568919">טל: 051-556-8919</MyNavLink>
            </Col>
            <Col lg="auto" md="auto" sm="auto" xs="auto">
              <MyNavLink href="https://www.facebook.com/profile.php?id=100008930593861">
                הפרופיל שלי
              </MyNavLink>
            </Col>
          </Row>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyMenu;
