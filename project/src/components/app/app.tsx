import {Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../../pages/main/main';
import SingIn from '../../pages/sing-in/sing-in';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import Error from '../error/error';
import Loader from '../loader/loader';
import { BrowserRouter } from 'react-router-dom';
import { useAppSelector } from '../../hooks';


function App() {
  const {films, isDataLoaded} = useAppSelector((state) => state);

  if (!isDataLoaded) {
    return (
      <Loader />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root}>
          <Route index element={<Main films={films}/>} />
          <Route path={AppRoute.Login} element={<SingIn />} />
          <Route
            path={AppRoute.MyList}
            element={<MyList films={films} />}
          />

          <Route path={AppRoute.Films}>
            <Route index element={<Film />} />
            <Route path={AppRoute.Id} element={<Film />} />
            <Route path={AppRoute.Review} element={<AddReview  />} />
          </Route>

          <Route path={AppRoute.Player} element={<Player films={films} />} />
        </Route>

        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
