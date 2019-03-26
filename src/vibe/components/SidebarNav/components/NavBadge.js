import React from 'react';
import { Badge } from 'reactstrap';

const NavBadge = ({ color, text }) => {
  return <Badge color={color}>{text}</Badge>;
};

export default NavBadge;
