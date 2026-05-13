import useGames from "../../hooks/useGames";

const Gamegrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error ? <p>Error: {error}</p> : null}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Gamegrid;
