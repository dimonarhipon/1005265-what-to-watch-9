import {Routes, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Main from '../../pages/main/main';
import SingIn from '../../pages/sing-in/sing-in';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import Error from '../error/error';
import PrivateRoute from '../private-route/private-route';

type promoFilmProps = {
  title: string,
  genre: string,
  year: number,
};

function App({...promoFilm}: promoFilmProps) {
  return (
    <Routes>
      <Route path={AppRoute.Root}>
        <Route index element={<Main {...promoFilm} />} />
        <Route path={AppRoute.Login} element={<SingIn />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList  />
            </PrivateRoute>
          }
        >
        </Route>

        <Route path={AppRoute.Films} element={<Film />} />
        <Route path={AppRoute.Review} element={<AddReview />} />
        <Route path={AppRoute.Player} element={<Player />} />
      </Route>

      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default App;
