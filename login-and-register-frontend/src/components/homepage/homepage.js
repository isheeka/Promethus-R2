import React from 'react';
import "./homepage.css";

const Homepage = ({ user, setLoginUser }) => {
  return (
    <div className="homepage">
      <h1>Welcome, {user?.name || user?.email}!</h1>
      <p><strong>Email:</strong> {user?.email}</p>
      {user?.name && <p><strong>Name:</strong> {user.name}</p>}
      <div className="button" onClick={() => setLoginUser(null)}>Logout</div>
    </div>
  );
};

export default Homepage;
