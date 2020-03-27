import React from 'react'
import { Link } from "react-router-dom"
import './Navigation.scss'

export default () => (
  <nav className="main-navigation">
    <ul>
      <li>
        <Link to="/">Bank</Link>
      </li>
      <li>
        <Link to="/log">Log</Link>
      </li>
      <li>
        <Link to="/anime">Anime</Link>
      </li>
      <li>
        <Link to="/user">Users</Link>
      </li>
    </ul>
  </nav>
);