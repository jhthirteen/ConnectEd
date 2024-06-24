import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArtistsRec from './pages/ArtistsRec'

const router = createBrowserRouter(
  createRoutesFromElements(
  <>
    <Route path = '/' index element={<HomePage />} />
    <Route path='/Artists' index element={<ArtistsRec />} />
  </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;