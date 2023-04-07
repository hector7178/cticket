import React from 'react';
import { Preview } from '@storybook/react';
import { NextIntlProvider } from 'next-intl';
import messages from '../src/messages/en.json';
import { Wrapper } from '@googlemaps/react-wrapper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../src/styles/globals.css';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 5 * 36000,
    },
  },
});

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <NextIntlProvider locale="en" messages={messages}>
      <QueryClientProvider client={queryClient}>
        <Wrapper
          apiKey="AIzaSyAqJM5Z5S36T9yRWUsdrBcU7hIj7gMYnIk"
          libraries={['places']}
        >
          <Story />
        </Wrapper>
      </QueryClientProvider>
    </NextIntlProvider>
  ),
];

export default preview;
