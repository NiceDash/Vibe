import React from 'react';
import FA from 'react-fontawesome';
import { Avatar } from '../../vibe';
import { Row, Button, Col, Card, CardBody, CardHeader, CardFooter, Container } from 'reactstrap';

function PostActions() {
  return (
    <div className="p-t-sm">
      <Button color="link" className="m-r text-muted">
        <FA name="thumbs-up" /> Like
      </Button>
      <Button color="link" className="text-muted">
        <FA name="comment" /> Comment
      </Button>
      <Button color="link" className="pull-right text-muted">
        <FA name="ellipsis-h" />
      </Button>
    </div>
  );
}

export default function Feed() {
  return (
    <Container>
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <Card>
            <CardBody>
              <textarea name="status" id="status" className="form-control" placeholder="Write your message..." />
            </CardBody>
            <CardFooter>
              <Button color="secondary">
                <FA name="paperclip" /> Attach File
              </Button>
              <Button color="primary" className="pull-right">
                Share
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="m-r-sm inline-block">
                <div className="avatar avatar-base bg-blue">
                  <div className="user-initials">GC</div>
                </div>
              </div>
              <h5 className="inline m-b-none m-t-none">George Costanza</h5>
            </CardHeader>
            <CardBody>
              <div>
                <iframe
                  src="https://player.vimeo.com/video/315269363?color=f15f5f&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0"
                  className="w-full"
                  title="video"
                  width="640"
                  height="360"
                  frameBorder="0"
                  webkitallowfullscreen=""
                  mozallowfullscreen=""
                  allowFullScreen=""
                />
              </div>
              <div>
                <Avatar initials="DP" color="success" size="small" />
                <Avatar initials="NM" color="gold" size="small" className="m-l-n-sm" />
                <small className="m-l-sm text-muted">David Putty, Newman and 12 others.</small>
              </div>
              <PostActions />
            </CardBody>
            <CardFooter>
              <div className="display-flex">
                <Avatar initials="JS" color="orange" />
                <input type="text" className="form-control m-l" />
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="m-r-sm inline-block">
                <Avatar initials="EB" color="blue" />
              </div>
              <h5 className="inline m-b-none m-t-none">Elaine Benis</h5>
            </CardHeader>
            <CardBody>
              <div>
                <h3>Does anyone here like muffin tops?</h3>
              </div>
              <PostActions />
            </CardBody>
            <CardFooter>
              <div className="display-flex">
                <Avatar initials="JS" color="orange" />
                <input type="text" className="form-control m-l" />
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="m-r-sm inline-block">
                <Avatar initials="CK" color="blue" />
              </div>
              <h5 className="inline m-b-none m-t-none">Cosmo Kramer</h5>
            </CardHeader>
            <CardBody>
              <div>
                <h3>Lookin' forward to Little Jerry's fight tonight. Who's coming?</h3>
              </div>
              <PostActions />
            </CardBody>
            <CardFooter>
              <div className="display-flex">
                <Avatar initials="JS" color="orange" />
                <input type="text" className="form-control m-l" />
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="m-r-sm inline-block">
                <div className="avatar avatar-base bg-orange">
                  <div className="user-initials">JS</div>
                </div>
              </div>
              <h5 className="inline m-b-none m-t-none">Jerry Seinfeld</h5>
            </CardHeader>
            <CardBody>
              <div>
                <p>
                  Whats the deal with dashboard designs? Is there anyone out there that can help me figure this out??
                </p>
              </div>
              <PostActions />
            </CardBody>
            <CardFooter>
              <div className="display-flex">
                <Avatar initials="JS" color="orange" />
                <input type="text" className="form-control m-l" />
              </div>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
