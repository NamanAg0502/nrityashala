'use client';

import { MantineProvider } from '@mantine/core';
import RootStyleRegistry from './emotion';

export default function AppProvider({ children }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'light',
      }}
    >
      <RootStyleRegistry>{children}</RootStyleRegistry>
    </MantineProvider>
  );
}
