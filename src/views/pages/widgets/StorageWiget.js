import React from 'react';
import { Row, Col, Card, Progress } from 'reactstrap';

export default function StorageWidget () {
    return (
        <Card body>
            <div className="h3">Storage</div>
            <div className="h6 text-muted m-t">Used Space</div>
            <div className="h5">375 / 500 GB</div>
            <Progress multi>
                <Progress bar color="primary" value="40" />
                <Progress bar color="warning" value="25" />
                <Progress bar color="danger" value="10" />
            </Progress>
            <hr />
            <Row>
                <Col>
                    <div className="h6">
                        <span className="bg-primary inline-block" style={{width: 10, height: 10, marginRight: 5}}></span>
                        Docs
                    </div>
                    <small className="text-muted">106 GB</small>
                </Col>
                <Col>
                    <div className="h6">
                        <span className="bg-warning inline-block" style={{width: 10, height: 10, marginRight: 5}}></span>
                        Video
                    </div>
                    <small className="text-muted">76 GB</small>
                </Col>
                <Col>
                    <div className="h6">
                        <span className="bg-danger inline-block" style={{width: 10, height: 10, marginRight: 5}}></span>
                        Email
                    </div>
                    <small className="text-muted">14 GB</small>
                </Col>
            </Row>
        </Card>
    )
}