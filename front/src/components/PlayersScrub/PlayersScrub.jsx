import React from "react";
import "./PlayersScrub.scss";
import PlayerCard from "../PlayerCard";

export default ({ players, addTitular, giveBack }) => (
  <section className="players players-scrub">
    <h2>Scrub Players</h2>
    <div className="players-container">
      {Array.isArray(players) &&
        players.map((player, key) => (
          <PlayerCard
            player={player}
            key={key}
            addTitular={() => addTitular(player)}
            giveBack={() => giveBack(player)}
          />
        ))}
    </div>
  </section>
);
