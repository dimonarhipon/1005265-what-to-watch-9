import Logo from '../../components/logo/logo';
import { useEffect, ChangeEvent, MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-action';
import { AppRoute, AuthorizationStatus } from '../../const';
import Footer from '../../components/footer/footer';

function SingIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const isAuthUser = authorizationStatus === AuthorizationStatus.Auth;

  useEffect(() => {
    if (isAuthUser) {
      navigate(-1);
    }
  }, [navigate, isAuthUser]);

  const regularValidate = /\S*(\S*([a-zA-Z]\S*[0-9])|([0-9]\S*[a-zA-Z]))\S*/;
  const regularEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  const handleEmailChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setEmail(value);

    if (regularEmail.test(value) && regularValidate.test(value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setPassword(value);

    if (regularValidate.test(value)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleFormSubmit = (evt: MouseEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (regularValidate.test(password)) {
      dispatch(loginAction({email, password}));
      navigate(AppRoute.Root);
    }
  };

  const isValidForm =
  emailError && passwordError && email.length > 0 && password.length > 0;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleFormSubmit}>
          <div className="sign-in__fields">
            {!emailError && email.length > 0 ? (
              <div className="sign-in__message">
                <p>Please enter a valid email address min 1 string and min 1 number and @</p>
              </div>
            ) : null}
            {!passwordError && password.length > 0 ? (
              <div className="sign-in__message">
                <p>Please enter a valid password address address min 1 string and min 1 number</p>
              </div>
            ) : null}
            <div className={`sign-in__field ${!emailError ? 'sign-in__field--error' : ''}`}>
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                onChange={handleEmailChange}
                value={email}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={`sign-in__field ${!passwordError ? 'sign-in__field--error' : ''}`}>
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                onChange={handlePasswordChange}
                value={password}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              style={{
                opacity: !isValidForm ? '0.3' : '1',
              }}
              className="sign-in__btn"
              type="submit"
              disabled={!isValidForm}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SingIn;
