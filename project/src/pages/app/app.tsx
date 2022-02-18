import {Routes, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Main from '../main/main';
import SingIn from '../sing-in/sing-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import Error from '../../components/error/error';
import PrivateRoute from '../../components/private-route/private-route';

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

        <Route path={AppRoute.Films}>
          <Route index element={<Film />} />
          <Route path={AppRoute.Id} element={<Film />} />
          <Route path='review' element={<AddReview />} />
        </Route>

        <Route path={AppRoute.Player}>
          <Route index element={<Player />} />
          <Route path={AppRoute.Id} element={<Player />} />
        </Route>
      </Route>

      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default App;
