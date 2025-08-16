import React, { useState } from "react";
import { developers } from "../data";
function Developers() {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    console.log("SearchText", searchText);
  };
  return (
    <div className="devList">
      <div style={{width:'45%'}} >
        <h1>Developer List</h1>

        <div className="devItem">
          {developers
            .filter(
              (devs) =>
                searchText.length === 0 ||
                (Array.isArray(devs.skills) &&
                  devs.skills.some((skill) =>
                    skill.toLowerCase().includes(searchText.toLowerCase())
                  ))
            )
            .map((item) => {
              return (
                <div className="devInfo">
                  {<div className="name">{item.name}</div>}
                  {<div className="email">{item.email}</div>}
                  {<div className="skills">{item.skills.join(" , ")}</div>}
                </div>
              );
            })}
          .
        </div>
      </div>

      <section>
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="Search Developers..."
        />
      </section>
    </div>
  );
}

export default Developers;
