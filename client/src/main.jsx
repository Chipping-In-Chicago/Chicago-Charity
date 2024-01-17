import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
// import ErrorPage from './pages/Errorpage.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Donations from './pages/Donations.jsx';
import About from './pages/About.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/donations',
        element: <Donations />
      },
      {
        path: '/about',
        element: <About />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
