import React from 'react';

export default function PageContent(props) {
  return (
    <main id="primary-content" role="main">
      {props.children}
    </main>
  );
}
