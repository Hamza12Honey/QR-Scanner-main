// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="home">
      <h1>QR Code App</h1>
      <div className="options">
        <Link to="/generate">Generate QR Code</Link>
        <Link to="/scan">Scan QR Code</Link>
      </div>
    </div>
  );
}

export default Main;
