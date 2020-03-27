import React from 'react'
import "./PlayerCard.scss";

export default ({
  player,
  player: { img, name, id },
  addTitular,
  addScrub,
  giveBack,
  key
}) => (
  <article key={key} className="player-card">
    <div
      className="player-card__img"
      style={{backgroundImage: `url(${img})`}}
    ></div>
    <h3>{name}</h3>
    <div className="player-card__actions">
      {addTitular && (
        <button className="btn-app" type="button" onClick={() => addTitular(player)}>
          Titular
        </button>
      )}
      {addScrub && (
        <button className="btn-app" type="button" onClick={() => addScrub(player)}>
          Scrub
        </button>
      )}
      {giveBack && (
        <button className="btn-app" type="button" onClick={() => giveBack(player)}>
          Back
        </button>
      )}
    </div>
  </article>
);