import React from "react";
import { Row, Col } from "react-bootstrap";

const MyImg = () => {
  const Text = (props) => (
    <label className="display-6 m-1 mb-2" {...props}>
      {props.children}
    </label>
  );

  const imgs = [
    {
      name: "ספינג'",
      src: "1.jpg",
    },
    {
      name: "ג'חנון",
      src: "3.jpg",
    },
    {
      name: "סלט",
      src: "4.jpg",
    },
    {
      name: "קובה סלק",
      src: "2.jpg",
    },
  ];

  return (
    <div className="text-center mt-5 mb-0">
      <span className="caption page-header display-3 mb-5">
        דוגמאות מצולמות
      </span>

      <Row className="text-center mt-5">
        {imgs.map((img) => (
          <Col lg={4} md={4} sm={12} xs={12} key={img.name}>
            <div className="thumbnail">
              <Text>{img.name}</Text>
              <img className="img" src={`./${img.src}`} alt={img.name} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MyImg;
