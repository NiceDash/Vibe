import React, {Component} from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
} from 'reactstrap';

export default class BreadcrumbsPage extends Component {
  constructor() {
    super();
    this.state = { }
  }

  render() {
    return (
      <div>
          <Card>
              <CardBody>
                <Breadcrumb>
                    <BreadcrumbItem><a href="#!">Projects</a></BreadcrumbItem>
                    <BreadcrumbItem><a href="#!">Builds</a></BreadcrumbItem>
                    <BreadcrumbItem><a href="#!">Servers</a></BreadcrumbItem>
                    <BreadcrumbItem active={true}><a href="#!">Usage</a></BreadcrumbItem>
                </Breadcrumb>
              </CardBody>
          </Card>
      </div>
    )
  }
}
