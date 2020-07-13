import React from "react";
// Elements
import Slider from "../../elements/slider";
// Styles
import PlayerAssignStyles from "./styles";
// Assets
import restartIcon from "../../assets/restart.svg";

const PlayersAssigned = (props) => {
  return (
    <PlayerAssignStyles className="player-assign-wrapper">
      <section>
        {props.playersBall.map((player, index) => (
          <div key={index}>
            {props.selectedPlayer.index === index &&
              props.selectedPlayer.isOpen && <h5>{player.ball}</h5>}
            <button className="btn btn--dark box-padding btn--icon btn--player">
              <h1>P{index + 1}</h1>
              <div className="slider-wrapper">
                <Slider />
              </div>
              <div className={`colour colour--${player.ball}`}>
                <h1>{player.ball}</h1>
              </div>
            </button>
          </div>
        ))}
      </section>
      <div className="restart-btn">
        <a href="/">
          <button className="btn btn--light btn--icon box-padding">
            <h2> Restart</h2>
            <img src={restartIcon} alt="" />
          </button>
        </a>
      </div>
      <div className="fill fill--black" />
    </PlayerAssignStyles>
  );
};
export default PlayersAssigned;
