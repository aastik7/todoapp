import React, { useState } from "react";
import "./App.css";
import Todoinput from "./components/Todoinput";

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    setListTodo([...listTodo, inputText]);
  };
  return (
    <div className="main-container">
      <div className="center-container"></div>
      <Todoinput addList={addList}></Todoinput>
    </div>
  );
}

export default App;
