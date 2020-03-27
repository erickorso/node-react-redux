import React from 'react'
import "./Players.scss";
import PlayerCard from '../PlayerCard';

export default ({ players, addTitular, addScrub }) => (
  <section className="players">
    <h2>Available Players</h2>
    <div className="players-container">
      {Array.isArray(players) &&
        players.map((player, key) => (
          <PlayerCard
            player={player}
            key={key}
            addTitular={() => addTitular(player)}
            addScrub={() => addScrub(player)}
          />
        ))}
    </div>
  </section>
);