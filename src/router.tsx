import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

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
    element: <Home />,
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
