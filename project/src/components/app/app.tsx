import Main from '../../pages/main/main';

type AppProps = {
  rentalOffers: number;
};

function App({rentalOffers}: AppProps): JSX.Element {
  return (
    <Main rentalOffers={rentalOffers}/>
  );
}

export default App;
