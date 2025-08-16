import React, { useEffect, useState } from "react";
import { developers } from "../data";
function Developers() {
  const [searchText, setSearchText] = useState("");
  const [usersData, setUsersData] = useState([]);
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    console.log("SearchText", searchText);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error(` HTTP error occured : ${response.status}`);
        }

        const data = await response.json();
        setUsersData(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);
  console.log("Api data : ", usersData);

  return (
    <div className="devList">
      <div style={{ width: "50%" }}>
        <h1>Developer List</h1>

        <div className="devItem">
          {usersData
            .filter(
              (devs) =>
                searchText.length === 0 ||
                devs.name.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((item) => {
              return (
                <div key={item.id} className="devInfo">
                  {<h3 className="name">{item.name}</h3>}
                  {/* {<p className="email">Email : {item.email}</p>}
                  {<p className="skills">{item.username}</p>}
                  {<p className="skills">Street : {item.address.street}</p>}
                  {<p className="skills">City : {item.address.city}</p>}
                  {<p className="skills">Company : {item.company.name}</p>}
                  {
                    <p className="skills">
                      Company Website : {item.website}
                    </p>
                  } */}
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
