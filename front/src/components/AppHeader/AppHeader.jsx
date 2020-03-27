import React from 'react'
import './AppHeader.scss'

export default ({ countAllPlayers, availables }) => (
  <header className="app-header">
    <h1>Select Titular & Scrub Players</h1>
    <h2>
      Total Players {countAllPlayers} / Availables {availables}
    </h2>
  </header>
);