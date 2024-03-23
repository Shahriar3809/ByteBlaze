import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Blogs from './Pages/Blogs.jsx'
import Bookmarks from './Pages/Bookmarks.jsx'
import MainLayout from './LayOuts/MainLayout.jsx'
import BlogPage from './Pages/BlogPage.jsx'
import Content from './Components/Content.jsx'
import Author from './Components/Author.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => {
          return fetch("https://dev.to/api/articles?per_page=20&top=7");
        },
      },
      {
        path: "/blog/:id",
        element: <BlogPage></BlogPage>,
        loader: ({ params }) => {
          return fetch(`https://dev.to/api/articles/${params.id}`);
        },
        children: [
          {
            index: true,
            element: <Content></Content>,
            loader: ({ params }) => {
              return fetch(`https://dev.to/api/articles/${params.id}`);
            },
          },
          {
            path: "author",
            element: <Author></Author>,
            loader: ({ params }) => {
              return fetch(`https://dev.to/api/articles/${params.id}`);
            },
          },
        ],
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
