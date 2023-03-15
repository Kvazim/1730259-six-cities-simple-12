import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import './style.css';

function PageNotFound(): JSX.Element {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--page-not-found">
        <section className="page-not-found">
          <h1 className="page-not-found__title">404 Page not found</h1>
          <Link className="page-not-found__link" to="/"><span>Вернутся на главную страницу</span></Link>
        </section>
      </main>
    </div>
  );
}

export default PageNotFound;
