import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const poolBallArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [poolBalls, setPoolBalls] = useState(poolBallArr);
  const [players, setPlayers] = useState(2);
  const [playersBall, setPlayersBall] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState({
    index: null,
    isOpen: false,
  });

  const inputPlayerNumber = (e) => {
    setPlayers(e.target.value);
  };

  const selectRandomBall = () => {
    const ballNumber = poolBalls[Math.floor(Math.random() * poolBalls.length)];
    let arr = poolBalls;
    let index = arr.indexOf(ballNumber);
    arr.splice(index, 1);
    console.log("ball chosen", ballNumber);
    setPoolBalls(arr);
    console.log("old", poolBalls);
    return ballNumber;
  };

  const submitPlayerNumber = () => {
    for (let i = 1; i <= players; i++) {
      setPlayersBall((oldArray) => [
        ...oldArray,
        {
          player: `player ${i}`,
          ball: selectRandomBall(),
        },
      ]);
    }
  };

  return (
    <>
      <section>
        <h3>select amount of players</h3>
        <input onChange={inputPlayerNumber} type="number" />
        <button onClick={submitPlayerNumber}>submit</button>
      </section>
      <section>
        {playersBall.map((player, index) => (
          <div key={index}>
            <h4>{player.player}</h4>
            {selectedPlayer.index === index && selectedPlayer.isOpen && (
              <h5>{player.ball}</h5>
            )}
            <button
              onClick={() =>
                setSelectedPlayer({
                  index: index,
                  isOpen: !selectedPlayer.isOpen,
                })
              }
            >
              {selectedPlayer.index === index && selectedPlayer.isOpen
                ? "hide ball number"
                : "show ball number"}
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default App;
