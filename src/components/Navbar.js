import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1.5rem",
        backgroundColor: "burlywood",
      }}
    > 
      <div>
        <h2>Developers Connect</h2>
      </div>

      <div>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 25,
            alignItems: "center",
            listStyle:'none'
          }}
          
        >
          <Link to={'/'} >Home</Link>
          <Link to={'/developers'}>Developers</Link>
          <Link to={'/register'}>Register</Link>
          <Link to={'/login'}>Login</Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
