import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Mainpage from './components/Mainpage'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PrivateRouting from './privaterouting/PrivateRouting'


const RouterLayout = () => {
    const routes = createBrowserRouter([

        {
            path: "/",
            element: <Mainpage />,
            children: [
                {
                    path: "/home",
                    element: <Home />,
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/Projects",
                    element: <Projects />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/login",
                    element: <Login />
                },
                {
                    path: "/dashboard",
                    element: <PrivateRouting>
                        <Dashboard />
                    </PrivateRouting>

                }
            ]
        }
    ])
    return <RouterProvider router={routes} />
}

export default RouterLayout