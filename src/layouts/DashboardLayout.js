import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Button, Badge, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Header, SidebarNav, Footer, PageContent, Avatar, Chat, PageAlert, Page } from '../vibe';
import Logo from '../assets/images/vibe-logo.svg';
import avatar1 from '../assets/images/avatar1.png';
import nav from '../_nav';
import routes from '../views';
import ContextProviders from '../vibe/components/utilities/ContextProviders';
import handleKeyAccessibility, { handleClickAccessibility } from '../vibe/helpers/handleTabAccessibility';

const MOBILE_SIZE = 992;

export default class DashboardLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarCollapsed: false,
      isMobile: window.innerWidth <= MOBILE_SIZE,
      showChat1: true,
    };
  }

  handleResize = () => {
    if (window.innerWidth <= MOBILE_SIZE) {
      this.setState({ sidebarCollapsed: false, isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  };

  componentDidUpdate(prev) {
    if (this.state.isMobile && prev.location.pathname !== this.props.location.pathname) {
      this.toggleSideCollapse();
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    document.addEventListener('keydown', handleKeyAccessibility);
    document.addEventListener('click', handleClickAccessibility);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  toggleSideCollapse = () => {
    this.setState(prevState => ({ sidebarCollapsed: !prevState.sidebarCollapsed }));
  };

  closeChat = () => {
    this.setState({ showChat1: false });
  };

  render() {
    const { sidebarCollapsed } = this.state;
    const sidebarCollapsedClass = sidebarCollapsed ? 'side-menu-collapsed' : '';
    return (
      <ContextProviders>
        <div className={`app ${sidebarCollapsedClass}`}>
          <PageAlert />
          <div className="app-body">
            <SidebarNav
              nav={nav}
              logo={Logo}
              logoText="VIBE."
              isSidebarCollapsed={sidebarCollapsed}
              toggleSidebar={this.toggleSideCollapse}
              {...this.props}
            />
            <Page>
              <Header
                toggleSidebar={this.toggleSideCollapse}
                isSidebarCollapsed={sidebarCollapsed}
                routes={routes}
                {...this.props}
              >
                <HeaderNav />
              </Header>
              <PageContent>
                <Switch>
                  {routes.map((page, key) => (
                    <Route path={page.path} component={page.component} key={key} />
                  ))}
                  <Redirect from="/" to="/home" />
                </Switch>
              </PageContent>
            </Page>
          </div>
          <Footer>
            <span>Copyright © 2019 Nice Dash. All rights reserved.</span>
            <span>
              <a href="#!">Terms</a> | <a href="#!">Privacy Policy</a>
            </span>
            <span className="ml-auto hidden-xs">
              Made with{' '}
              <span role="img" aria-label="taco">
                🌮
              </span>
            </span>
          </Footer>
          <Chat.Container>
            {this.state.showChat1 && (
              <Chat.ChatBox name="Messages" status="online" image={avatar1} close={this.closeChat} />
            )}
          </Chat.Container>
        </div>
      </ContextProviders>
    );
  }
}

function HeaderNav() {
  return (
    <React.Fragment>
      <NavItem>
        <form className="form-inline">
          <input className="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search" />
          <Button type="submit" className="d-none d-sm-block">
            <i className="fa fa-search" />
          </Button>
        </form>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          New
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Project</DropdownItem>
          <DropdownItem>User</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            Message <Badge color="primary">10</Badge>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav>
          <Avatar size="small" color="blue" initials="JS" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </React.Fragment>
  );
}
