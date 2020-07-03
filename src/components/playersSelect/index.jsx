import React from "react";
// Styles
import PlayerSelectStyles from "./styles";
// Assets
import arrowIcon from "../../assets/arrow.svg";

const PlayersSelect = (props) => {
  return (
    <PlayerSelectStyles className="player-select">
      <div className={`${props.hideSelectPlayers ? "fadeout" : null}`}>
        <section>
          {[...Array(7)].map((x, index) => (
            <button
              className={`btn btn--light player-btn box-padding ${
                props.players === index + 2 ? "btn--active" : null
              }`}
              onClick={props.inputPlayerNumber}
            >
              <h1>{index + 2}P</h1>
            </button>
          ))}
        </section>
        <div className="assign-btn">
          <button
            onClick={props.submitPlayerNumber}
            className="btn btn--dark btn--icon box-padding"
          >
            <h2>Assign balls</h2>
            <img src={arrowIcon} alt="" />
          </button>
        </div>
      </div>
    </PlayerSelectStyles>
  );
};

export default PlayersSelect;
