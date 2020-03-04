import React from 'react';
import { Link } from 'react-router-dom';


export const Greeting = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <h3>Hello, {currentUser.email}</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
    
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>

      <Link to="/login">Log In</Link>
    </div>
  );

  return (
    <div>
 
      <div>{display}</div>
    </div>
  );
};
