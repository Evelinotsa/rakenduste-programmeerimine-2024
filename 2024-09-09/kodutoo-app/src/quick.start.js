import "./App.css";
import { useState } from "react";

//Quick Start
const products = [
  { title: "Kapsas", isFruit: false, id: 1 },
  { title: "Virsik", isFruit: true, id: 2 },
  { title: "Pirn", isFruit: true, id: 3 },
  { title: "Sibul", isFruit: false, id: 4 },
];
function ShoppingList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    //alert("You clicked me!");
    setCount(count + 1);
  }
  return <button onClick={handleClick}>Click me ({count})</button>;
}

function App() {
  return (
    <div>
      <ShoppingList />
      <MyButton />
      <MyButton />
      <MyButton />
    </div>
  );
}

export default App;
