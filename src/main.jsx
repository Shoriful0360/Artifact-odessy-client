import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './Provider/AuthProvider.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthPrivate from './Private/AuthPrivate.jsx'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <QueryClientProvider client={queryClient}>
   <AuthProvider>

 <RouterProvider router={router}>
  </RouterProvider>
  <Toaster  position="top-center"
  reverseOrder={false} />

  </AuthProvider>
   </QueryClientProvider>
  </StrictMode>,
)
