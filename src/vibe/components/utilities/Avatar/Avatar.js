import React from 'react';

export default function Avatar (props) {
    return (
        <div className={`avatar avatar-${props.size} bg-${props.color} ${props.className}`}>
            {props.initials && !props.image && <div className="user-initials">{props.initials}</div>}
            {props.image && <img src={props.image} className="avatar-image" alt="" />}
        </div>
    )
};
