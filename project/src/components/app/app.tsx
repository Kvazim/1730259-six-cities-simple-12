import Main from '../../pages/main/main';

type AppScreenProps = {
  rentalOffers: number;
}

function App({rentalOffers}: AppScreenProps): JSX.Element {
  return (
    <Main rentalOffers={rentalOffers}/>
  );
}

export default App;
