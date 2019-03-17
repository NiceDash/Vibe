import React from 'react';
import PageAlertContext from '../PageAlert/PageAlertContext';

const Page = props => {
  return (
    <PageAlertContext>
      {context => {
        const hasPageAlertClass = context.alert ? 'has-alert' : '';
        return (
          <div id="page-content" className={`${hasPageAlertClass}`}>
            {props.children}
          </div>
        );
      }}
    </PageAlertContext>
  );
};

export default Page;
