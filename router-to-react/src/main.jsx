import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello from react router !!!</div>
  },
  {
    path:'/about',
    element: <div>I am sagor is big softwor engenier</div>
  },
  {
    path:'/contact',
    element:<div>Call me right now !!!</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routerprovider router={router}></Routerprovider>
  </React.StrictMode>,
)
