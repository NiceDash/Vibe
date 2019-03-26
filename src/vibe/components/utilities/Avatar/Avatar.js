import React from 'react';

export default function Avatar({ size, color, className, initials, image }) {
  return (
    <div className={`avatar avatar-${size} bg-${color} ${className}`}>
      {initials && !image && <div className="user-initials">{initials}</div>}
      {image && <img src={image} className="avatar-image" alt="" />}
    </div>
  );
}
