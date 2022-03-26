import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import {logoutAction} from '../../store/api-action';
import { useAppSelector, useAppDispatch } from '../../hooks';

function User() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const logoutHandler = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>

      {authorizationStatus === AuthorizationStatus.Auth
        ? (
          <Link to={AppRoute.Root} className="user-block__link" onClick={logoutHandler}>
            Sign out
          </Link>
        ) : (
          <Link to={AppRoute.Login} className="user-block__link">
            Sign in
          </Link>
        )}
    </ul>
  );
}

export default User;
