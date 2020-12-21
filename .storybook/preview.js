import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { MemoryRouter } from 'react-router-dom';
import { worker } from '../src/mocks/handlers';
import { theme } from '../src/theme';

export const decorators = [
  (Story) => (
    <>
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={new QueryClient()}>
            <CssBaseline />
            <Story />
            <ReactQueryDevtools />
          </QueryClientProvider>
        </ThemeProvider>
      </MemoryRouter>
    </>
  ),
];

worker.start();
