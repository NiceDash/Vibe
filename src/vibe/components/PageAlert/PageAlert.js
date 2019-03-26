import React from 'react';
import { Alert } from 'reactstrap';
import PageAlertContext from './PageAlertContext';

export default function PageAlert() {
  return (
    <PageAlertContext.Consumer>
      {context =>
        context.alert && (
          <Alert
            color={context.alert.type}
            className="page-level-alert"
            fade={false}
            isOpen={context.alert !== null}
            toggle={context.closeAlert}
          >
            {context.alert.message}
          </Alert>
        )
      }
    </PageAlertContext.Consumer>
  );
}
