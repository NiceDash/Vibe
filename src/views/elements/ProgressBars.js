import React from 'react';
import { Progress, Card, CardBody, Row, Col, Button, ButtonGroup } from 'reactstrap';

export default class ProgressPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            progress: 40
        }
        this.down = this.down.bind(this);
        this.up = this.up.bind(this);


    }

    down () {
        if (this.state.progress > 0) {
            this.setState(prevState => ({ progress: prevState.progress - 10 }));
        }
    }

    up () {
        if (this.state.progress < 100) {
            this.setState(prevState => ({ progress: prevState.progress + 10 }));
        }
    }

    render () {
        return (
            <Card>
                <CardBody>
                <Row>
                    <Col md={6}>
                        <Progress className="m-b" />
                        <Progress value="25" animated color="warning" className="m-b"  />
                        <Progress value={50} className="m-b"  />
                        <Progress value={75} color="danger" className="m-b"  />
                        <Progress value="100" className="m-b"  />
                        <Progress multi className="m-b" >
                            <Progress bar value="15" />
                            <Progress bar color="success" value="30" />
                            <Progress bar color="info" value="25" />
                            <Progress bar color="warning" value="20" />
                            <Progress bar color="danger" value="5" />
                        </Progress>
                    </Col>
                    <Col md={6}>
                        <ButtonGroup className="m-b">
                            <Button onClick={this.down}>Down</Button>
                            <Button onClick={this.up}>Up</Button>
                        </ButtonGroup>
                        <Progress className="m-b" value={this.state.progress} />
                    </Col>
                </Row>
                </CardBody>
            </Card>
        );
    }
};
