import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap";
import { isMobile, isBrowser } from 'react-device-detect';
import data from "./menu1.json";
import MyImg from './MyImg';
import MyMenu from './MyMenu';

export default function App() {
  const text1 = "ההזמנות מתבצעות בתשלום מקדמה. איסוף מנוף הגליל. לפרטים נוספים מוזמנים ליצור קשר בטל' 051-556-8919"
  //const text1 = "ההזמנות מתבצעות בתשלום מקדמה. איסוף מנוף הגליל. לפרטים נוספים מוזמנים ליצור קשר.";

  const sortItemsByPrice = (data) => data.sort((a, b) =>
    parseInt(a.price) - parseInt(b.price)
  );

  //console.clear();
  console.log(Object.keys(data?.menu));

  return (
    <>
      <MyMenu />
      <Container fluid={isMobile} className="mb-5">
        <div className="jumbotron rounded" style={{
          backgroundColor: "rgb(255, 174, 201)"
        }}>
          <span className='display-5 text-center' style={{ fontWeight: "bold" }}>המאכלים של הודיה</span>
          <br />
          <span className='text-right' style={{ fontSize: "20px" }}>
            שמי הודיה. אני מכינה מגוון מאכלים ביתיים טעימים להזמנה:</span>
          <br />

          <Row className='mt-4'>
            {Object.keys(data?.menu).map((menuItem, i) =>
              <Col lg={6} md={6} key={`submenuItems${i}`}>
                <div className="text-center" style={{ marginBottom: "2%", paddingBottom: "2%" }}>
                  <span className='display-6' style={{ fontWeight: "bold" }}>{`${menuItem}`}</span>
                  <ul>
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

            <Col className="hidden-sm hidden-xs">
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
        <Row style={{marginTop: "1px"}}>
          <Col xs={8} sm={8} md={4} lg={4}>
            <a href="https://www.facebook.com/media/set/?set=a.3197479870559668&type=3" className='display-5 text-center'>
              לאלבום תמונות בפייסבוק
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
