import React from 'react';
import spin from './styles/spin.svg';
import bars from './styles/bars.svg';
import puff from './styles/puff.svg';
import dots from './styles/dots.svg';

export default function Loader (props) {
    let loaderType;

    const size = props.small ? 'small' : '' ;

    if (props.type === 'spin') {
        loaderType = spin;
    } else if (props.type === 'bars') {
        loaderType = bars;
    } else if (props.type === 'puff') {
        loaderType = puff;
    } else if (props.type === 'dots') {
        loaderType = dots;
    } else {
        loaderType = spin;
    }

    return <div className={`loader ${size}`} style={{backgroundImage: `url(${loaderType})`}}>Loading...</div>
}