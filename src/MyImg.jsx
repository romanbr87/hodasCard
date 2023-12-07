import React from "react";
import { Row, Col } from "react-bootstrap";

const MyImg = () => {
  const Text = (props) => <label {...props}>{props.children}</label>
  
  return (
    <div className="text-center mt-5 mb-0">
      <span className="caption page-header display-3">דוגמאות מצולמות</span>

      <Row className="text-center">
        <Col md={6} lg={4}>
          <div className="thumbnail">
            <Text>ספינג'</Text>
            <img className="img" src="./1.jpg" alt="ספינג'" />
          </div>
        </Col>

        <Col md={6} lg={4}>
          <div className="thumbnail">
            <Text>ג'חנון</Text>
            <img className="img" src="./3.jpg" alt="ג'חנון" />
          </div>
        </Col>

        <Col md={6} lg={4}>
          <div className="thumbnail">
            <Text>סלט</Text>
            <img className="img" src="./4.jpg" alt="סלט" />
          </div>
        </Col>

        <Col md={6} lg={4}>
          <div className="thumbnail">
            <Text>קובה סלק</Text>
            <img className="img" src="./2.jpg" alt="קובה סלק" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MyImg;
