type DescriptionProps = {
  description: string;
}

function PropertyDescription({description}: DescriptionProps):JSX.Element {
  return (
    <p className="property__text">{description}</p>
  );
}

export default PropertyDescription;
