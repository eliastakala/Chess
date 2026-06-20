import "./App.css";

const Square= ({ rank, file }) => {
  const isLight = (rank + file) % 2 === 0;
  return (
    <div
      className={`square ${isLight ? "light" : "dark"}`}
    />
  );
}

const Board = () => {
  const indices = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="board">
      {indices.map((rank) =>
        indices.map((file) => (
          <Square
            key={`${rank}-${file}`}
            rank={rank}
            file={file}
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
