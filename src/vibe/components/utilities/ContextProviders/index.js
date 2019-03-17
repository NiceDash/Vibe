import React from 'react';
import { PageLoaderProvider } from '../../PageLoader/PageLoaderContext';
import { PageAlertProvider } from '../../PageAlert/PageAlertContext';

export default function ContextProviders(props) {
  return (
    <PageLoaderProvider>
      <PageAlertProvider>{props.children}</PageAlertProvider>
    </PageLoaderProvider>
  );
}
