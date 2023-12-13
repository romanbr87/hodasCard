import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import { isMobile, isBrowser } from 'react-device-detect';
import data from "./menu1.json";
import MyImg from './MyImg';
import MyMenu from './MyMenu';

export default function App() {
  //const text1 = "ההזמנות מתבצעות בתשלום מקדמה. איסוף מנוף הגליל. לפרטים נוספים מוזמנים ליצור קשר בטל' 051-556-8919"
  const text1 = "ההזמנות מתבצעות בתשלום מקדמה. איסוף מנוף הגליל. לפרטים נוספים מוזמנים ליצור קשר.";

  const sortItemsByPrice = (data) => data.sort((a, b) =>
    parseInt(a.price) - parseInt(b.price)
  );

  //console.clear();
  // console.log(Object.keys(data?.menu));
  // style={{
  //   backgroundColor: "rgb(255, 174, 201)"
  // }}

  return (
    <>
      <MyMenu />
      <Container fluid={isMobile} className="mb-5">
        <div className="jumbotron bg-light rounded pt-3 pb-3">
          <h1 className='text-center mb-0' style={{ fontWeight: "bold", fontSize: isBrowser ? "35px" : "30px" }}>המאכלים של הודיה</h1>
          <br />
          <span className='text-right mt-0 pt-0' style={isBrowser ? { fontSize: "20px" } :
            { fontSize: "17px", lineHeight: "1", textAlign: "right" }}>
            שמי הודיה. אני מכינה מגוון מאכלים ביתיים טעימים להזמנה:</span>
          <br />

          <Row className='mt-4'>
            {Object.keys(data?.menu).map((menuItem, i) =>
              <Col lg={6} md={6} key={`submenuItems${i}`}>
                <div className="text-center" style={{ padding: "0", margin: "0", marginBottom: "2%", paddingBottom: "2%" }}>
                  <span className='display-6' style={{ fontWeight: "bold" }}>{`${menuItem}`}</span>
                  <ul className='mt-3'>
                    {sortItemsByPrice(data?.menu[menuItem]).map((items, j) =>
                      <li key={`submenuItems ${i} ${j}`} className="text-right" style={{ fontSize: "15px" }}>
                        {items.name}
                        <span className="badge pull-left">{items.price + "₪"}</span>
                      </li>
                    )}
                  </ul>
                </div>
              </Col>
            )}
          </Row>
          <Row className='mt-0'>
            <Col className="hidden-lg hidden-md ">
              <p
                id="text1"
                style={{ fontWeight: 'bold', fontSize: '17px', lineHeight: '1.4' }}
              >
                {text1}
              </p>
            </Col>

            <Col className="hidden-sm hidden-xs mb-3">
              <h2
                id="text1"
                style={{ fontWeight: 'bold', lineHeight: '1.4' }}
              >
                {text1}
              </h2>
            </Col>
          </Row>
        </div>

        <MyImg />
        <Row style={{ marginTop: "1px" }} className="justify-content-center">
          <Col lg="auto" md="auto" sm="auto" xs="auto">
            <a href="https://www.facebook.com/media/set/?set=a.3197479870559668&type=3" className=
              {`display-5 text-center ${isMobile && "btn btn-primary"}`} style={isMobile ? { fontSize: "25px" } : {}}>
              לאלבום תמונות בפייסבוק
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
