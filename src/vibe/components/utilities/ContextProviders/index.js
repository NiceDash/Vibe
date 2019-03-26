import React from 'react';
import { PageLoaderProvider } from '../../PageLoader/PageLoaderContext';
import { PageAlertProvider } from '../../PageAlert/PageAlertContext';

export default function ContextProviders({ children }) {
  return (
    <PageLoaderProvider>
      <PageAlertProvider>{children}</PageAlertProvider>
    </PageLoaderProvider>
  );
}
