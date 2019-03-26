import React from 'react';

export default function Switch({ enabled, toggle }) {
  return (
    <label className="switch switch-primary">
      <input type="checkbox" className="switch-input" checked={enabled} onChange={() => {}} />
      <span className="switch-label" onClick={toggle} />
    </label>
  );
}
