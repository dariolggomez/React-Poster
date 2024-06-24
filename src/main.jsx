import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewPost from './routes/NewPost'
import RootLayout from './routes/RootLayout'
import PostsLayout from './routes/PostsLayout'
import { loader as fetchPosts } from './utils/api_functions'

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [
      {
        path: '/', element: <PostsLayout />, children: [
          {
            path: '/create-post', element: <NewPost />
          }
        ], loader: fetchPosts
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
