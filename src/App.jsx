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
      path: "/ReactNews24x7-Frontend-/publisher/register",
      element: <P_RegLog />
    },
    {
      path: "/ReactNews24x7-Frontend-/publisher/login",
      element: <P_RegLog />
    },
    {
      path: "/ReactNews24x7-Frontend-/publisher",
      element: <P_Home />
    },
    {
      path: "/ReactNews24x7-Frontend-/publisher/addnews",
      element: <P_AddNews />
    },
    {
      path: "/ReactNews24x7-Frontend-/publisher/publishes",
      element: <P_AllNews />
    },
    {
      path: "/ReactNews24x7-Frontend-/publisher/logout",
      element: <P_Logout />
    },
    {
      path: "/ReactNews24x7-Frontend-/publisher/feed",
      element: <P_Feed />
    },
    // <<<<<<<<<<<<<<<<<<<<All Customer Routes>>>>>>>>>>>>>>>>>>>>>>>>
    {
      path: "/ReactNews24x7-Frontend-/",
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
