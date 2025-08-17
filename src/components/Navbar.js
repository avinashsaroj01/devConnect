import React from "react";
import { Link,useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar"
    > 
      <div style={{ cursor:'pointer'}} onClick={()=>navigate('/')}>
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
