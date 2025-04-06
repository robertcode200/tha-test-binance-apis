import MainPage from './pages/MainPage';
import PairDetailPage from './pages/PairDetailPage';

const routes = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/pair/:pair',
    element: <PairDetailPage />,
  }
];

export default routes;
