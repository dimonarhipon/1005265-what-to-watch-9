import {Navigate} from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import {AppRoute, AuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({ children}: PrivateRouteProps) {
  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
