import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { Login, Signup, Library, Navbar, Page, Read} from '../index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "signup",
        element: <Signup />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "library",
        element: <Library />,
      },
      {
        path: "Navbar",
        element: <Navbar/>
      },
      {
        path: "read/:bookid",
        element: <Read/>
      },
      {
        path: "book/:bookid",
        element: <Page/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
