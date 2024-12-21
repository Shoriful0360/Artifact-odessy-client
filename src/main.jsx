import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './Provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
  <RouterProvider router={router}>
  </RouterProvider>
  <Toaster  position="top-center"
  reverseOrder={false} />
  </AuthProvider>
  </StrictMode>,
)
