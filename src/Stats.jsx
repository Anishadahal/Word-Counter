export const Stats = ({ stats }) => {
  return (
    <section className="stats">
      <Stat label="Words" number={stats.numberOfWords} />
      <Stat label="Characters" number={stats.numberOfCharacters} />
      <Stat label="Instagram" number={stats.instagramCharactersLeft} />
      <Stat label="Facebook" number={stats.facebookCharactersLeft} />
    </section>
  );
};

const Stat = ({ label, number }) => {
  return (
    <section className="stat">
      <span className="stat__number">{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
};
