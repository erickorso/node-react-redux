import React from "react";
import "./UserCard.scss";

export default ({ user: { name, username, email }, key }) => (
  <article key={key} className="user-card">
    <div className="user-card__img">{email}</div>
    <h2>{username}</h2>
    <h3>{name}</h3>
  </article>
);
