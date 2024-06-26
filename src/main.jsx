import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewPost from './routes/NewPost'
import RootLayout from './routes/RootLayout'
import PostsLayout from './routes/PostsLayout'
import { fetchPosts as fetchPosts } from './utils/api_functions'
import { sendPost as createPost } from './utils/api_functions'
import PostDetails from './routes/PostDetails'
import { openPostDetails as postDetailsLoader } from './utils/api_functions'

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [
      {
        path: '/', element: <PostsLayout />, loader: fetchPosts,
        children: [
          {
            path: '/create-post', element: <NewPost />, action: createPost
          },
          {path: '/:id', element: <PostDetails />, loader: postDetailsLoader}
        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
