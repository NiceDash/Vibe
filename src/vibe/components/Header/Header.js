import React, { Component } from 'react';
import ToggleSidebarButton from './components/ToggleSidebarButton';
import PageLoader from '../PageLoader/PageLoader';

import { Navbar, NavbarToggler, Collapse, Nav } from 'reactstrap';
import { matchPath } from 'react-router-dom';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }
  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  getPageTitle = () => {
    let name;
    this.props.routes.map(prop => {
      if (
        matchPath(this.props.location.pathname, {
          path: prop.path,
          exact: true,
          strict: false
        })
      ) {
        name = prop.name;
      }
      return null;
    });
    return name;
  };

  render() {
    return (
      <header className="app-header">
        <SkipToContentLink focusId="primary-content" />
        <div className="top-nav">
          <Navbar color="faded" light expand="md">
            <ToggleSidebarButton
              toggleSidebar={this.props.toggleSidebar}
              isSidebarCollapsed={this.props.isSidebarCollapsed}
            />
            <div className="page-heading">{this.getPageTitle()}</div>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {this.props.children}
              </Nav>
            </Collapse>
            <PageLoader />
          </Navbar>
        </div>
      </header>
    );
  }
}

const SkipToContentLink = ({ focusId }) => {
  return (
    <a href={`#${focusId}`} tabIndex="1" className="skip-to-content">
      Skip to Content
    </a>
  );
};
