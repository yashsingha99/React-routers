import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/home/Home';
import About from './component/about/About.jsx'
import Github from './component/Github/Github.jsx'
import Contect from './component/contect/Contect.jsx'
import Login from './component/Login/Login.jsx'
import SignUp from './component/Login/signup/SignUp.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contect",
        element: <Contect/>
      },
      {
        path: "github",
        element: <Github/>
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path:'signup',
        element:<SignUp/>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
