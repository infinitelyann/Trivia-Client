import GameInputs from "./GameInputs";
import GameCarousel from "./GameCarousel";

const GamePlay = (props) => {
  const { setFilterOptions, err, handleClick, isLoading, data } = props;

  if (data.length < 1) {
    return (
      <>
        <GameInputs setFilterOptions={setFilterOptions} />
        {err && <h2>{err}</h2>}

        <button onClick={handleClick}>Fetch data</button>

        {isLoading && <h2>Loading...</h2>}
      </>
    );
  } else {
    return (
      <>
        <GameCarousel data={props.data} />
      </>
    );
  }
};

export default GamePlay;
