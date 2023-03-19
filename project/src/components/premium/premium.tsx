type PremiumProps = {
  className?: string;
}

function Premium({className}: PremiumProps): JSX.Element {
  return (
    <div className={className}>
      <span>Premium</span>
    </div>
  );
}

export default Premium;
