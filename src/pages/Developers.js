import React, { useEffect, useState } from "react";
import { developers } from "../data";
import { useNavigate } from "react-router-dom";
import { findByLabelText } from "@testing-library/dom";
import DeveloperDetails from "./DeveloperDetails";
function Developers() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    console.log("SearchText", searchText);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://68a15c046f8c17b8f5d9a486.mockapi.io/api/devconnect"
        );

        if (!response.ok) {
          throw new Error(` HTTP error occured : ${response.status}`);
        }

        const data = await response.json();
        setUsersData(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log("Api data : ", usersData);

  return (
    <div className="devList">
      {loading ? (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1> Loading...</h1>
        </div>
      ) : (
        <>
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
                    <div
                      key={item.id}
                      className="devInfo"
                      onClick={() =>
                        navigate(`/developers/${item.id}`, { state: item })
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <img src={item.avatar} alt="" />
                      {<h3 className="name">{item.name}</h3>}
                    </div>
                  );
                })}
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
        </>
      )}

    </div>
  );
}

export default Developers;
