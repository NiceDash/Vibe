import React, {Component} from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  ButtonGroup,
  ButtonToolbar,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class Buttons extends Component {
  constructor() {
    super();
    this.state = {
      dropdownOpen: false
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    this.state.dropdownOpen ? this.setState({dropdownOpen: false}) : this.setState({dropdownOpen: true}) ;
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Button Colors</CardHeader>
                <CardBody>
                <Button color="primary">Primary</Button>{' '}
                <Button color="secondary">Secondary</Button>{' '}
                <Button color="success">Success</Button>{' '}
                <Button color="warning">Warning</Button>{' '}
                <Button color="danger">Danger</Button>{' '}
                <Button color="link">Link</Button>{' '}
                </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Button with Icon</CardHeader>
                <CardBody>
                  <Button color="success"><i className="fa fa-check"></i>&nbsp;Submit</Button>{' '}
                  <Button color="danger"> <i className="fa fa-close"></i>&nbsp;&nbsp;Cancel</Button>{' '}
                  <Button color="primary"><i className="fa fa-cloud-upload"></i>&nbsp;&nbsp;Upload</Button>{' '}
                  <Button color="secondary"><i className="fa fa-arrow-left"></i>&nbsp;&nbsp;Left</Button>{' '}
                  <Button color="secondary">Right&nbsp;&nbsp;<i className="fa fa-arrow-right"></i></Button>{' '}
                </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Block Level Buttons</CardHeader>
              <CardBody>
                <Button color="success" block>Block Level Button</Button>{' '}
                <Button color="secondary" block>Block Level Button</Button>{' '}
                <Button color="primary" block><i className="fa fa-cloud-download"></i>&nbsp;&nbsp;Block Level Button</Button>{' '}
                <Button color="secondary" block><i className="fa fa-cloud-download"></i>&nbsp;&nbsp;Block Level Button</Button>{' '}
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Outline Buttons</CardHeader>
              <CardBody>
                <Button color="success" block outline>Outline Button</Button>{' '}
                <Button color="secondary" block outline>Outline Button</Button>{' '}
                <Button color="primary" block outline><i className="fa fa-cloud-download"></i>&nbsp;&nbsp;Outline Button</Button>{' '}
                <Button color="secondary" block outline><i className="fa fa-cloud-download"></i>&nbsp;&nbsp;Outline Button</Button>{' '}
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Button Sizes</CardHeader>
              <CardBody>
                <p><Button color="primary" size="lg">Large Button</Button>{' '}<Button color="secondary" size="lg">Large Button</Button></p>
                <p><Button color="primary">Default Button</Button>{' '}<Button color="secondary">Default Button</Button></p>
                <p><Button color="primary" size="sm">Small Button</Button>{' '}<Button color="secondary"size="sm">Small Button</Button></p>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>Button Sizes</CardHeader>
              <CardBody>
                <ButtonGroup>
                  <Button>Left</Button>{' '}
                  <Button>Middle</Button>{' '}
                  <Button>Right</Button>
                </ButtonGroup>
                <div className="m-b"></div>
                <ButtonToolbar>
                  <ButtonGroup>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button>7</Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button>8</Button>
                  </ButtonGroup>
                </ButtonToolbar>
                <div className="m-b"></div>
                <ButtonGroup>
                  <Button>1</Button>
                  <Button>2</Button>
                  <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                      Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Header</DropdownItem>
                      <DropdownItem disabled>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Buttons;
