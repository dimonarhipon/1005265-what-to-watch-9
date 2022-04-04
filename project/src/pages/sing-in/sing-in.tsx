import Logo from '../../components/logo/logo';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-action';
import { AppRoute } from '../../const';

function SingIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleEmailChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setPassword(value);
  };

  const handleFormSubmit = (evt: MouseEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(loginAction({email, password}));
    navigate(AppRoute.Root);
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleFormSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
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
            <div className="sign-in__field">
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
              className="sign-in__btn"
              type="submit"
              disabled={email.length === 0 || password.length === 0}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <Logo isLight />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default SingIn;
