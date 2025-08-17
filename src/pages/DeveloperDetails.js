import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
function DeveloperDetails() {
  const location = useLocation();
  const usersData = location.state;
  console.log("data in details page", usersData);
  
  return (
    <div  className="devDetails">
        <h1> Developer Details</h1>
      <div >
        {<h3 className="name">{usersData.name}</h3>}
        {<p className="email">Email : {usersData.email}</p>}
        {<p className="skills">Bio : {usersData.Bio}</p>}
        {<p className="skills">Posts : {<button>View Posts</button>} </p>}
       
      </div>
    </div>
  );
}

export default DeveloperDetails;
