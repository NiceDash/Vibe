import React from 'react';
import { Button } from 'reactstrap';
import FA from 'react-fontawesome';

export default function SidebarToggleButton(props) {
  const chevronClassName = props.isSidebarCollapsed
    ? 'is-collapsed'
    : 'is-not-collapsed';
  const screenReaderLabel = props.isSidebarCollapsed
    ? 'Expand Sidebar Navigation'
    : 'Collapse Sidebar Navigation';
  return (
    <Button
      onClick={props.toggleSidebar}
      className={`m-r sidebar-toggle ${chevronClassName}`}
      aria-label={screenReaderLabel}>
      <FA name={'chevron-left'} />
    </Button>
  );
}
