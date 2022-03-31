import {Navigate} from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import {AppRoute, AuthorizationStatus} from '../../const';
import Loader from '../loader/loader';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({ children}: PrivateRouteProps) {
  const {authorizationStatus} = useAppSelector(({USER}) => USER);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Loader />;
  }

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
