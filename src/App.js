import React, { useState, useEffect, useReducer } from "react";
// Components
import Question from "./components/question";
import PlayersSelect from "./components/playersSelect";
import PlayersAssigned from "./components/playersAssigned";

const setupReducer = (state, action) => {
  switch (action.type) {
    case "setPlayers": {
      return {
        ...state,
        players: action.payload,
      };
    }
    case "setPoolBalls": {
      return {
        ...state,
        poolBalls: action.payload,
      };
    }
    case "showPlayers": {
      return {
        ...state,
        question: "Slide arrow to reveal ball number",
        hideSelectPlayers: true,
      };
    }
    default:
      break;
  }
  return state;
};

const initialState = {
  poolBalls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  players: 2,
  playersBall: [],
  selectedPlayer: {
    index: null,
    isOpen: false,
  },
  question: "How many people are playing?",
  hideSelectPlayers: false,
};

const App = () => {
  // removing body margin
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.overflowX = "hidden";
    document.body.style.width = "100vw";
  }, []);

  const [state, dispatch] = useReducer(setupReducer, initialState);
  const {
    players,
    selectedPlayer,
    poolBalls,
    question,
    hideSelectPlayers,
  } = state;

  const [playersBall, setPlayersBall] = useState([]);

  const selectRandomBall = () => {
    const ballNumber = poolBalls[Math.floor(Math.random() * poolBalls.length)];
    let index = poolBalls.indexOf(ballNumber);
    dispatch({
      type: "setPoolBalls",
      payload: poolBalls.splice(index, 1),
    });
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
    dispatch({
      type: "showPlayers",
    });
  };

  return (
    <>
      <div className="body">
        <Question question={question} />
        <PlayersSelect
          submitPlayerNumber={submitPlayerNumber}
          inputPlayerNumber={(e) => {
            dispatch({
              type: "setPlayers",
              payload: Number(e.target.innerText.charAt(0)),
            });
          }}
          players={players}
          hideSelectPlayers={hideSelectPlayers}
        />
        {hideSelectPlayers && (
          <PlayersAssigned
            playersBall={playersBall}
            selectedPlayer={selectedPlayer}
          />
        )}
      </div>
    </>
  );
};

export default App;
