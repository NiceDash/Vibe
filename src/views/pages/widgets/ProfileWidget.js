import React from 'react';
import { Row, Col, Card, Button } from 'reactstrap';
import avatar2 from '../../../assets/images/avatar2.jpeg';

export default function ProfileWidget() {
  return (
    <Card body>
      <div className="text-center">
        <div className="m-b">
          <img src={avatar2} style={{ width: 100 }} className="b-circle" alt="profile" />
        </div>
        <div>
          <h2 className="h4">Jason Smith</h2>
          <div className="h5 text-muted">Creative Director</div>
          <hr />
          <Row className="text-center m-b">
            <Col>
              <strong>230</strong>
              <div className="text-muted">Followers</div>
            </Col>
            <Col>
              <strong>325</strong>
              <div className="text-muted">Following</div>
            </Col>
          </Row>
          <Button block>Follow</Button>
        </div>
      </div>
    </Card>
  );
}
