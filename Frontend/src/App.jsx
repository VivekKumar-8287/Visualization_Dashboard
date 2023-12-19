import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Users from "./Pages/users/Users";
import Home from "./Pages/home/Home";
import Sidebar from "./Pages/sidebar/Sidebar"
import Navbar from "./Pages/navbar/Navbar"


function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Sidebar />
        <div className="container">
          <div className="maincontainer">
            <Navbar />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home/>,
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
