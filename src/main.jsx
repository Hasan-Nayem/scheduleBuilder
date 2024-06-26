import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthProvider from './providers/AuthProvider.jsx';
import { router } from './routes/routes.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)