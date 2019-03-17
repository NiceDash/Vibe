import React from 'react';
import { Badge } from 'reactstrap';

const NavBadge = props => {
  return <Badge color={props.color}>{props.text}</Badge>;
};

export default NavBadge;
