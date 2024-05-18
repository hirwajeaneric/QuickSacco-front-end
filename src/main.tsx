import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query';

const helmetContext = {};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      refetchOnWindowFocus: false,
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
