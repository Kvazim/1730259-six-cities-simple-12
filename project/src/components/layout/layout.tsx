import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/header/header';
import cn from 'classnames';
import { AppRoute } from '../../consts';

function Layout():JSX.Element {
  const {pathname} = useLocation();
  return (
    <div className={
      cn('page',
        {'page page--gray page--main': pathname === AppRoute.Root},
      )
    }
    >
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
