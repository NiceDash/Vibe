import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

export default function SubNavigation({ navList }) {
  return (
    <div className="page-sub-nav">
      <Nav pills>
        {navList.map((item, index) => {
          return (
            <NavItem key={index}>
              <NavLink to={item.url} className="nav-link" activeClassName="active">
                {item.name}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
    </div>
  );
}
