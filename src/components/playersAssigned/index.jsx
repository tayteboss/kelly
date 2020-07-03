import React from "react";
// Assets
import arrowIcon from "../../assets/arrow.svg";

const PlayersAssigned = (props) => {
  return (
    <section>
      {props.playersBall.map((player, index) => (
        <div key={index}>
          {props.selectedPlayer.index === index &&
            props.selectedPlayer.isOpen && <h5>{player.ball}</h5>}
          <button className="btn btn--dark box-padding btn--icon">
            <h1>P{index + 1}</h1>
            <img src={arrowIcon} alt="" />
          </button>
        </div>
      ))}
    </section>
  );
};
export default PlayersAssigned;
