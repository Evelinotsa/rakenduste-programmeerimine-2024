import React, { useState } from "react";
import "./App.css";
import Name from "./components/Name";
import Counter from "./components/Counter";
import PropDrilling from "./components/PropDrilling";
import Show from "./components/Show";
import Context from "./components/Context";
import MyHobbies from "./components/MyHobbies";
import "./myHobbies.css";

function App() {
  const [show, setShow] = useState(true);

  const toggleShow = () => setShow((prevShow) => !prevShow);

  const name = "Evelin";
  const hobbies = ["Lugemine", "Jooksmine", "Kassid"];

  return (
    <>
      <Context />
      <Show show={show} toggleShow={toggleShow} />
      <PropDrilling />
      <Name title="Evelin" />;
      <Counter />
      <MyHobbies name={name} hobbies={hobbies} />
    </>
  );
}

export default App;
