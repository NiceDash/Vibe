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
          <Avatar initials="JS" color="primary" /> <Avatar initials="TD" color="secondary" />{' '}
          <Avatar initials="AP" color="warning" size="small" /> <Avatar initials="PT" color="danger" size="small" />{' '}
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Images</CardHeader>
        <CardBody>
          <Avatar image={avatar3} /> <Avatar image={avatar4} /> <Avatar image={avatar5} size="small" />{' '}
          <Avatar image={avatar6} size="small" />{' '}
        </CardBody>
      </Card>
    </React.Fragment>
  );
}
