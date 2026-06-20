import "./App.css";

const Square= ({ rank, file, handleClick }) => {
  const isLight = (rank + file) % 2 === 0;
  return (
    <div
      className={`square ${isLight ? "light" : "dark"}`}
      onClick={handleClick}
    />
  );
}

const Board = () => {
  const indices = [0, 1, 2, 3, 4, 5, 6, 7];
  const clickSquare = ({rank, file}) => {
    console.log("clicked", rank, file)
  }

  return (
    <div className="board">
      {indices.map((rank) =>
        indices.map((file) => (
          <Square
            key={`${rank}-${file}`}
            rank={rank}
            file={file}
            handleClick={() => clickSquare({rank: { rank }, file: { file }})}
          />
        ))
      )}
    </div>
  );
}

function App() {
  return (
    <Board />
  );
}

export default App;
