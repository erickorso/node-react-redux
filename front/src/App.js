import React from 'react';
import AppHeader from './components/AppHeader';
import Players from './components/Players';
import PlayersSelected from './components/PlayersSelected';
import './main.scss';

export default () => (
  <main className="main-app">
    <AppHeader />
    <div className="players-wrapper">
      <div className="players-availables">
        <Players />
      </div>
      <div className="players-selected">
        <PlayersSelected />
      </div>
    </div>
  </main>
);
