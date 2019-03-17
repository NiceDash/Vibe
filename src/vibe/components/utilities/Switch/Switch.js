import React from 'react';

export default function Switch (props) {
  return (
      <label className="switch switch-primary">
          <input type="checkbox" className="switch-input" checked={props.enabled} onChange={() => {}} />
          <span className="switch-label" onClick={props.toggle}></span>
      </label>
  );
}
