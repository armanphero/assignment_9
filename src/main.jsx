import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import { getData } from './utilities/fakeDb.js'
import JobDetails from './components/JobDetails.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import AppliedJobs from './components/AppliedJobs.jsx'
import Blog from './components/Blog.jsx'
import Statistic from './components/Statistic.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: getData,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/job/:jobId',
        element: <JobDetails />,
        loader: ({params}) => params.jobId
      },
      {
        path: '/appliedjobs',
        element: <AppliedJobs />
      },
      {
        path: '/statistics',
        element: <Statistic />
      },
      {
        path: '/blog',
        element: <Blog />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
