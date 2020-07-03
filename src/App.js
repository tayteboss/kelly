import React, { useState, useEffect } from "react";
// Components
import Question from "./components/question";
import PlayersSelect from "./components/playersSelect";
import PlayersAssigned from "./components/playersAssigned";

const App = () => {
  // removing body margin
  useEffect(() => {
    document.body.style.margin = "0";
  }, []);

  const poolBallArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [poolBalls, setPoolBalls] = useState(poolBallArr);
  const [players, setPlayers] = useState(2);
  const [playersBall, setPlayersBall] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState({
    index: null,
    isOpen: false,
  });

  const inputPlayerNumber = (e) => {
    setPlayers(Number(e.target.innerText.charAt(0)));
  };

  const selectRandomBall = () => {
    const ballNumber = poolBalls[Math.floor(Math.random() * poolBalls.length)];
    let index = poolBalls.indexOf(ballNumber);
    setPoolBalls(poolBalls.splice(index, 1));
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
      <Question question={"How many people are playing?"} />
      <PlayersSelect
        submitPlayerNumber={submitPlayerNumber}
        inputPlayerNumber={inputPlayerNumber}
        players={players}
      />
      <PlayersAssigned
        playersBall={playersBall}
        selectedPlayer={selectedPlayer}
      />
    </>
  );
};

export default App;
