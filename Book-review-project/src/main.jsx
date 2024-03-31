import React from "react";
import ReactDOM  from "react-dom/client";
import App from './App'
import { Outlet, createBrowserRouter } from "react-router-dom";
import Root from "./component/Root/Root";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root></Root>,
    children: [
      {
        path:'/',
        
      }
    ]
  }
])

export default main;

ReactDOM.createRoot (document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
