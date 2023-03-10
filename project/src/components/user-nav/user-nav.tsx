import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../consts';

type NavigateProps = {
  authorizationStatus: AuthorizationStatus;
}

function UserNav(props: NavigateProps): JSX.Element {
  const {authorizationStatus} = props;
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ?
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <div className="header__nav-profile">
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
            </div>
          </li>
          <li className="header__nav-item">
            <Link className="header__nav-link" to="#todo">
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
