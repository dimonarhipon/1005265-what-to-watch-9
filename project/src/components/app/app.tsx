import {Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../../pages/main/main';
import SingIn from '../../pages/sing-in/sing-in';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import Error from '../error/error';
import { BrowserRouter } from 'react-router-dom';
import {dataFilms} from '../../types/data';

type typeProps = {
  films: dataFilms,
};

function App({films}: typeProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root}>
          <Route index element={<Main />} />
          <Route path={AppRoute.Login} element={<SingIn />} />
          <Route
            path={AppRoute.MyList}
            element={<MyList films={films} />}
          />

          <Route path={AppRoute.Films}>
            <Route index element={<Film films={films} />} />
            <Route path={AppRoute.Id} element={<Film films={films} />} />
            <Route path={AppRoute.Review} element={<AddReview films={films} />} />
          </Route>

          <Route path={AppRoute.Player} element={<Player films={films} />} />
        </Route>

        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
