import React, {useEffect, useState} from 'react'
import './User.scss'
import UserCard from '../UserCard';

export default ({ loadUser, users, countUsers }) => {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      if (!loaded) {
        loadUser();
        setLoaded(true);
      }
    }, [loadUser, loaded, setLoaded]);

  return (
    <main className="main-users">
      <h1>Total Users {countUsers}</h1>
      <ul>{users && users.map((user, key) => <UserCard user={user}/>)}</ul>
    </main>
  );
};