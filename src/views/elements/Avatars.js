import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { Avatar } from '../../vibe';
import avatar3 from '../../assets/images/avatar3.jpeg';
import avatar4 from '../../assets/images/avatar4.jpeg';
import avatar5 from '../../assets/images/avatar5.jpeg';
import avatar6 from '../../assets/images/avatar6.jpeg';

export default function Avatars() {
  return (
    <React.Fragment>
      <Card>
        <CardHeader>Initials</CardHeader>
        <CardBody>
          <Avatar initials="JS" color="primary" size="lg" /> <Avatar initials="TD" color="secondary" size="lg" />{' '}
          <Avatar initials="AP" color="warning" size="md" /> <Avatar initials="PT" color="danger" size="md" />{' '}
          <Avatar initials="JS" color="primary" /> <Avatar initials="TD" color="secondary" />{' '}
          <Avatar initials="AP" color="warning" size="sm" /> <Avatar initials="PT" color="danger" size="sm" />{' '}
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Images</CardHeader>
        <CardBody>
          <Avatar image={avatar3} size="lg" /> <Avatar image={avatar4} size="lg" /> <Avatar image={avatar5} size="md" />{' '}
          <Avatar image={avatar6} size="md" /> <Avatar image={avatar3} /> <Avatar image={avatar4} />{' '}
          <Avatar image={avatar5} size="sm" /> <Avatar image={avatar6} size="sm" />{' '}
        </CardBody>
      </Card>
    </React.Fragment>
  );
}
