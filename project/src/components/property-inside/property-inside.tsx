type PropertyInsideProps = {
  good: string;
}

function PropertyInside({good}: PropertyInsideProps) {
  return (
    <li className="property__inside-item">
      {good}
    </li>
  );
}

export default PropertyInside;
