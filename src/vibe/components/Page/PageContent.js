import React from 'react';

export default function PageContent({ children }) {
  return (
    <main id="primary-content" tabIndex="-1" role="main">
      {children}
    </main>
  );
}
