import React from 'react';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap';

export default function CmsPage () {
    return (
        <div>
            <h3 className="m-b">New Post</h3>
            <Row>
                <Col md={8}>
                    <Card>
                        <CardBody>
                            <FormGroup>
                                <Label for="exampleText">Title</Label>
                                <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Description</Label>
                                <Input type="textarea" name="text" id="exampleText2" style={{height: 300}} />
                            </FormGroup>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <Button block className="m-b">Preview</Button>
                    <Card>
                        <CardHeader>Publish</CardHeader>
                        <CardBody>
                            <div>
                                <strong>Status:</strong> Draft
                                </div>
                            <hr />
                            <div>
                                <strong>Word Count:</strong> 329
                            </div>
                            <hr />
                            <div>
                            <FormGroup>
                                <Label for="exampleSelectMulti">Category</Label>
                                <Input type="select" name="select" id="exampleSelect3">
                                    <option>Entertainment</option>
                                    <option>Books</option>
                                    <option>Video</option>
                                    <option>Food</option>
                                    <option>Cars</option>
                                </Input>
                            </FormGroup>
                            </div>
                            <hr />
                            <Button block color="primary">Publish</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>Tags</CardHeader>
                        <CardBody>
                            <FormGroup>
                                <Input type="text" name="select" id="exampleSelect4" />
                            </FormGroup>
                            <Button>Add</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}