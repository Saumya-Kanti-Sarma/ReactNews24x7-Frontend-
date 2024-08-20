import React from 'react'
import { createBrowserRouter, Outlet, Route, RouterProvider } from 'react-router-dom';
import P_RegLog from './Publisher/Pages/P_RegLog';
import P_Home from './Publisher/Pages/P_Home';
import P_AddNews from './Publisher/Pages/P_AddNews';
import P_AllNews from './Publisher/Pages/P_AllNews';
import P_Logout from './Publisher/Pages/P_Logout';
import P_Feed from './Publisher/Pages/P_Feed';
const App = () => {
  const Allroute = createBrowserRouter([
    // <<<<<<<<<<<<<<<<<<<<All Publishers Routes>>>>>>>>>>>>>>>>>>>>>>>>
    {
      path: "/publisher/register",
      element: <P_RegLog />
    },
    {
      path: "/publisher/login",
      element: <P_RegLog />
    },
    {
      path: "/publisher",
      element: <P_Home />
    },
    {
      path: "/publisher/addnews",
      element: <P_AddNews />
    },
    {
      path: "/publisher/publishes",
      element: <P_AllNews />
    },
    {
      path: "/publisher/logout",
      element: <P_Logout />
    },
    {
      path: "/publisher/feed",
      element: <P_Feed />
    },
    // <<<<<<<<<<<<<<<<<<<<All Customer Routes>>>>>>>>>>>>>>>>>>>>>>>>
    {
      path: "/",
      element: "Home page"
    },
    {
      path: "/search",
      element: "search page"
    },
    {
      path: "/about",
      element: "about page"
    },
  ]);

  return (
    <>
      <RouterProvider router={Allroute} />
      <Outlet />
    </>
  )
}

export default App
