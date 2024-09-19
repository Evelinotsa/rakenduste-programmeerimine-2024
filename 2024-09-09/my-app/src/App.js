import React, { useState } from "react";
import "./App.css";
import Name from "./components/Name";
import Counter from "./components/Counter";
import PropDrilling from "./components/PropDrilling";
import Show from "./components/Show";
import Context from "./components/Context";
import Hobbies from "./components/Hobbies";
import "./hobbies.css";

function App() {
  const [show, setShow] = useState(true);

  const toggleShow = () => setShow((prevShow) => !prevShow);

  //nimi ja hobid
  const name = "Evelin";
  const hobbies = ["Lugemine", "Jooksmine", "Kassid"];

  return (
    <>
      <Context />
      <Show show={show} toggleShow={toggleShow} />
      <PropDrilling />
      <Name title="Evelin" />;
      <Counter />
      <Hobbies name={name} hobbies={hobbies} />
    </>
  );
}

export default App;
