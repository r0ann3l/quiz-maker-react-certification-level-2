import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, } from "react-router-dom";
import NewQuiz from './pages/NewQuiz';
import Results from './pages/Results';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NewQuiz />,
  },
  {
    path: "/results",
    element: <Results />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
