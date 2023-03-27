import { Link } from 'react-router-dom';
import './style.css';

function PageNotFound(): JSX.Element {
  return (
    <main className="page__main page__main--page-not-found">
      <section className="page-not-found">
        <h1 className="page-not-found__title">404 Page not found</h1>
        <Link className="page-not-found__link" to="/"><span>Вернутся на главную страницу</span></Link>
      </section>
    </main>
  );
}

export default PageNotFound;
