import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter, Outlet } from 'react-router';
import RootLayout from '../Layout/RootLayout';
import Friends from './Pages/Friends/Friends';
import Timelines from './Pages/Timeline/Timelines';
import Stats from './Pages/Stats/Stats';
import Homepage from './Pages/Homepage';
import Friend_detailes from './Component/Friend_detailes';
import Timecontext from './context/Timecontext';
import Notfound from './Component/Notfound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: () => fetch("/friends.json"),
      },
      {
        path: "/friends",
        element: <Friends />,
      },
      {
        path: "friends/:id",
        element: <Friend_detailes />,
        loader: () => fetch("/friends.json"),
      },
      {
        path: "/timeline",
        element: <Timelines />,
        loader: () => fetch("/friends.json"),
      },
      {
        path: "/stats",
        element: <Stats />,
      },
    ],
    errorElement: <Notfound/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Timecontext>
      <RouterProvider router={router} />
    </Timecontext>
  </StrictMode>,
);
