import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logOutAction } from '../../store/api-actions';

function UserNav(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const userData = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ?
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <div className="header__nav-profile">
              <div className="header__avatar-wrapper user__avatar-wrapper"
              // TODOS уточнить как сделать лучше
                style={{
                  backgroundImage: `url(${userData?.avatarUrl ?? './img/avatar.svg'})`,
                  borderRadius: '50%'
                }}
              >
              </div>
              <span className="header__user-name user__name">{userData?.email}</span>
            </div>
          </li>
          <li className="header__nav-item">
            <Link
              className="header__nav-link"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logOutAction());
              }}
              to="/"
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </ul>
      </nav>
      :
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to="/login">
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        </ul>
      </nav>
  );
}

export default UserNav;
