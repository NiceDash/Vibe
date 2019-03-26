import React from 'react';
import { Button } from 'reactstrap';
import FA from 'react-fontawesome';

export default function SidebarToggleButton({ isSidebarCollapsed, toggleSidebar }) {
  const chevronClassName = isSidebarCollapsed ? 'is-collapsed' : 'is-not-collapsed';
  const screenReaderLabel = isSidebarCollapsed ? 'Expand Sidebar Navigation' : 'Collapse Sidebar Navigation';
  return (
    <Button onClick={toggleSidebar} className={`m-r sidebar-toggle ${chevronClassName}`} aria-label={screenReaderLabel}>
      <FA name={'chevron-left'} />
    </Button>
  );
}
