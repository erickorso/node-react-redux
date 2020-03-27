import React from "react";
import "./PlayersTitular.scss";
import PlayerCard from "../PlayerCard";

export default ({ players, addScrub, giveBack }) => (
  <section className="players players-titular">
    <h2>Titular Players</h2>
    <div className="players-container">
      {Array.isArray(players) &&
        players.map((player, key) => (
          <PlayerCard
            player={player}
            key={key}
            addScrub={() => addScrub(player)}
            giveBack={() => giveBack(player)}
          />
        ))}
    </div>
  </section>
);
