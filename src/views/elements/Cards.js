import React, { Component } from 'react';
import {
  Row,
  Button,
  Col,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
} from 'reactstrap';
import laptopImage from '../../assets/images/laptop.jpeg';

class CardsPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Row>
        <Col md={4}>
          <Card>
            <CardHeader>Card</CardHeader>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam-a-0 m-b-smitudin
              egestas dui nec, fermentum diam. Vivamus vel tincidunt libero, vitae elementu
            </CardBody>
          </Card>
          <Card>
            <CardImg src={laptopImage} top width="100%" alt="laptop" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <CardHeader>Card with Footer</CardHeader>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam-a-0 m-b-smitudin
              egestas dui nec, fermentum diam. Vivamus vel tincidunt libero, vitae elementu
            </CardBody>
            <CardFooter>
              <Button color="success">Add</Button> <Button>Cancel</Button>
            </CardFooter>
          </Card>
          <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        <Col md={4}>
          <Card color="transparent">
            <CardHeader>Transparent Card</CardHeader>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam-a-0 m-b-smitudin
              egestas dui nec, fermentum diam. Vivamus vel tincidunt libero, vitae elementu
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default CardsPage;
