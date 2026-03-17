import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Help from "../pages/Help";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import PrivateRouting from "./PrivateRouting";
import Profile from "../components/dasboardcomponents/DashboardPages/Profile";
import UpdateProfile from "../components/dasboardcomponents/DashboardPages/UpdateProfile";
import AddNotes from "../components/dasboardcomponents/DashboardPages/AddNotes";
import Dashboardhome from "../components/dasboardcomponents/DashboardPages/Dashboardhome";

import UpdateStatus from "./UpdateStatus";
import Allnotes from "../components/dasboardcomponents/DashboardPages/Allnotes";
import UpdateNotes from "../components/dasboardcomponents/DashboardPages/UpdateNotes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <UpdateStatus>
            <Home />
          </UpdateStatus>
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/help",
        element: <Help />
      },
      {
        path: "/dashboard",
        element: <PrivateRouting>
                  <Dashboard />
                </PrivateRouting>,
        children:[
          {
            index:true,
            element:<Dashboardhome/>
          },
          {
            path:"/dashboard/profile/:userId",
            element:<Profile/>
          },
          {
            path:"/dashboard/updateprofile/:userId",
            element:<UpdateProfile/>
          },
          {
            path:"/dashboard/addnotes/:userId",
            element:<AddNotes/>
          },
          {
            path:"/dashboard/allnotes/:userId",
            element:<Allnotes/>
          },
           {
            path:"/dashboard/updatenotes/:userId/:noteId",
            element:<UpdateNotes/>
          }
         
        ]
      }
    ]

  },

  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/register",
    element: <Register />
  }

]);