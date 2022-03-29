// import "./InputContainer.css";
import { useState } from "react";

const Main = () => {
  const [data, setData] = useState([
    ...(localStorage.getItem("database")
      ? JSON.parse(localStorage.getItem("database"))
      : []),
  ]);
  const [currentData, setCurrentData] = useState(null);

  let submitHandler = () => {
    setData([...data, currentData]);
    localStorage.setItem("database", JSON.stringify([...data, currentData]));
    setCurrentData(null); 
  };

  return (
    <div className="Main">
      <h1>To Do List</h1>
      <input
        type="text"
        placeholder="Title"
        value={currentData ? currentData.title : ""}
        onChange={(e) => {
          setCurrentData({ ...currentData, title: e.target.value });
        }}
      ></input>
      <input
        type="text"
        placeholder="Description"
        value={currentData ? currentData.description : ""}
        onChange={(e) => {
          setCurrentData({ ...currentData, description: e.target.value });
        }}
      ></input>
      <input
        type="text"
        placeholder="Owner"
        value={currentData ? currentData.owner : ""}
        onChange={(e) => {
          setCurrentData({ ...currentData, owner: e.target.value });
        }}
      ></input>
      <button
        variant="contained"
        color="success"
        onClick={() =>
          currentData &&
          Object.keys(currentData).length === 3 &&
          submitHandler()
        }
      >
        Add +
      </button>
     

      {data.map((data, key) => {
        return (
          <div className="abc">
            <h1>Title {data.title}</h1>
            <h2>Description {data.description}</h2>
            <h3>Owner {data.owner}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Main;