import React from 'react';
import PageAlertContext from '../PageAlert/PageAlertContext';

const Page = ({ children }) => {
  return (
    <PageAlertContext.Consumer>
      {context => {
        const hasPageAlertClass = context.alert ? 'has-alert' : '';
        return (
          <div id="page-content" className={`${hasPageAlertClass}`}>
            {children}
          </div>
        );
      }}
    </PageAlertContext.Consumer>
  );
};

export default Page;
