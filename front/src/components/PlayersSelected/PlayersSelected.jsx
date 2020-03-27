import React from 'react'
import "./PlayersSelected.scss";
import PlayersTitular from '../PlayersTitular';
import PlayersScrub from '../PlayersScrub';

export default () => (
  <section className="player-selected">
    <PlayersTitular className="players-titular" />
    <PlayersScrub className="players-scrub" />
  </section>
);