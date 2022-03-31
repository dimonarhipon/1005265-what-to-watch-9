import {Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import PrivateRoute from '../../components/private-route/private-route';
import SingIn from '../../pages/sing-in/sing-in';
import Main from '../../pages/main/main';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import Error from '../error/error';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root}>
          <Route index element={<Main />} />
          <Route path={AppRoute.Login} element={<SingIn />} />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute>
                <MyList />
              </PrivateRoute>
            }
          />

          <Route path={AppRoute.Films}>
            <Route index element={<Film />} />
            <Route path={AppRoute.Id} element={<Film />} />
            <Route path={AppRoute.Id + AppRoute.Review} element={
              <PrivateRoute>
                <AddReview />
              </PrivateRoute>
            }
            />
          </Route>

          <Route path={AppRoute.Player} element={<Player />} />
        </Route>

        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
