import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/app/App';
import { theme } from './theme';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={new QueryClient()}>
        <CssBaseline />
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
