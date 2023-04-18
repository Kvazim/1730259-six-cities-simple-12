import { useLocation } from 'react-router-dom';
import Logo from '../logo/logo';
import UserNav from '../user-nav/user-nav';
import { AppRoute } from '../../consts';
import { memo } from 'react';

function Header(): JSX.Element {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          { location.pathname !== AppRoute.Login ? <UserNav /> : null }
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
