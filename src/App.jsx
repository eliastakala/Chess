import "./App.css";
import { useState } from "react";

const pieces = ['p', 'r', 'kn', 'b', 'k', 'q', 'P', 'R', 'KN', 'B', 'K', 'Q', '']

const initialState = [
  ['1', '2', '3', '4', '5', '6', '7', '8'],
  ['1', '2', '3', '4', '5', '6', '7', '8'],
  ['1', '2', '3', '4', '5', '6', '7', '8'],
  ['1', '2', '3', '4', '5', '6', '7', '8'],
  ['1', '2', '3', '4', '5', '6', '7', '8'],
  ['1', '2', '3', '4', '5', '6', '7', '8'],
  ['1', '2', '3', '4', '5', '6', '7', '8'],
  ['1', '2', '3', '4', '5', '6', '7', '8']
]

const Square= ({ rank, file, handleClick, piece }) => {
  const isLight = (rank + file) % 2 === 0;
  return (
    <div
      className={`square ${isLight ? "light" : "dark"}`}
      onClick={handleClick}
    >{piece}</div>
  );
}

const Board = ({ state }) => {
  const indices = [0, 1, 2, 3, 4, 5, 6, 7];
  const clickSquare = ({rank, file, piece}) => {
    console.log("clicked", rank, file, piece)
  }

  return (
    <div className="board">
      {indices.map((rank) =>
        indices.map((file) => (
          <Square
            key={`${rank}-${file}`}
            rank={rank}
            file={file}
            
            piece={state[rank][file]}
            handleClick={() => clickSquare({rank: { rank }, file: { file }, piece: {piece}})}
          />
        ))
      )}
    </div>
  );
}

const App= () => {
  const [gameState, setGameState] = useState(initialState)

  return (
    <Board state={gameState}/>
  );
}

export default App;
