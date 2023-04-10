import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/Error/Error';
import HomePage from './pages/Home/Home';

interface RouterElement {
  id: number;
  path: string;
  label: string;
  element: React.ReactNode;
}

const routerData: RouterElement[] = [
  {
    id: 0,
    path: '/',
    label: 'Home',
    element: <HomePage />,
  },
  {
    id: 1,
    path: '*',
    label: 'Error',
    element: <ErrorPage />,
  },
];

export const routers = createBrowserRouter(
  routerData.map((router: RouterElement) => {
    return {
      path: router.path,
      element: router.element,
    };
  }),
);
