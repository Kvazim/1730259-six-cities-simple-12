import { FormEvent, SyntheticEvent, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { AuthData } from '../../types/auth-data';
import { loginAction } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus, CITIES, PASSWORD_REG_EXP } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getRandomArrayItem } from '../../utils/utils';
import { changeCity } from '../../store/location-sorting-procces/location-sorting-procces.slise';
import { toast } from 'react-toastify';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';

function Login(): JSX.Element {
  const isAuthChecked = useAppSelector(getAuthorizationStatus);
  const [randomCity,] = useState(getRandomArrayItem<typeof CITIES>(Object.assign([], CITIES)));
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthChecked === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root, { replace: true });
    }
  });

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const onClickSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      if (PASSWORD_REG_EXP.test(passwordRef.current.value)) {
        onSubmit({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        });
        navigate(AppRoute.Root);
      } else {
        toast.warn('Пароль должен содержать одну цифру и букву');
      }
    }
  };

  const onClickRandomCity = (evt: SyntheticEvent<EventTarget>) => {
    evt.preventDefault();
    dispatch(changeCity(randomCity as unknown as string));
    navigate(AppRoute.Root, { replace: true });
  };

  return (
    <>
      <Helmet>
        <title>six cities simple: authorization</title>
      </Helmet>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="" method="post" onSubmit={onClickSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Root} onClick={(evt) => onClickRandomCity(evt)}>
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Login;
