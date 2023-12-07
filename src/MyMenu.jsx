import React from "react";
import { Container, Navbar, Nav, NavItem, NavLink, Col } from "react-bootstrap";

const MyMenu = () => {
  function whatsappURL() {
    window.location.href =
      (navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
        ? "whatsapp://"
        : "https://web.whatsapp.com/") + "send?phone=972515568919";
  }

  const MyNavLink = (props) => (
    <Nav.Link {...props}><h3>
      {props.children}</h3>
    </Nav.Link>
  );

  return (
    <Navbar bg="dark" variant="dark" fixed="top" className="mb-5">
      <Container fluid>
        <Nav className="text-center">
          <Col lg={2} md={2} sm={2} xs={2}>
            <MyNavLink className="a2" href="javascript:whatsappURL();">
              ווטסאפ
            </MyNavLink>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            <MyNavLink id="a1" href="tel:0515568919">טל: 051-556-8919</MyNavLink>
          </Col>
          <Col lg={2} md={2} sm={2} xs={2}>
            <MyNavLink
              className="a2"
              href="https://www.facebook.com/profile.php?id=100008930593861"
            >
              הפרופיל שלי
            </MyNavLink>
          </Col>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyMenu;
