import { useContext } from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import Layout from '@/components/layout/Layout';
import Loader from '@/components/UI/loader/Loader';
import { AuthContext } from '@/context/Context';
import About from '@/pages/About';
import Login from '@/pages/Login';
import Main from '@/pages/Main';
import NotFound from '@/pages/NotFound';
import PostIdPage from '@/pages/PostIdPage';
import Posts from '@/pages/Posts';

const AppRouter = () => {
  const context = useContext(AuthContext);
  let isAuth = null;
  if (context) {
    isAuth = context.isAuth;
  }
  if (context?.isLoading) {
    return <Loader />;
  }
  const router = createBrowserRouter(
    isAuth === false
      ? [
          {
            path: '/login',
            element: <Login />,
          },
          {
            path: '*',
            element: <Navigate to="/login" replace />,
          },
        ]
      : [
          {
            element: <Layout />,
            children: [
              {
                path: '/',
                element: <Main />,
              },
              {
                path: '/posts',
                element: <Posts />,
              },
              {
                path: '/posts/:id',
                element: <PostIdPage />,
              },
              {
                path: '/about',
                element: <About />,
              },
              {
                path: '/login',
                element: <Navigate to="/" replace />,
              },
              {
                path: '*',
                element: <NotFound />,
              },
            ],
          },
        ]
  );
  return <RouterProvider router={router} />;
};

export default AppRouter;
