import React from 'react';
import { Link } from 'react-router-dom';


export const Greeting = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <h3>Hello, {currentUser.email}</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : null;
  return (
    <div>
 
      <div>{display}</div>
    </div>
  );
};
