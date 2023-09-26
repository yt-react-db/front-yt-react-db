import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ThemeProvider } from './components/theme-provider';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthorizationCodeFlow from './components/AuthorizationCode.tsx'
import About from './components/About.tsx'
import Root from './components/Root.tsx'
import PrivacyPolicy from './components/PrivacyPolicy.tsx'
import TermsAndConditions from './components/TermsConditions.tsx'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,

      },
      {
        path: "/set-permissions-flow",
        element: <AuthorizationCodeFlow />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />
      }
    ]
  },




])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
  ,
)