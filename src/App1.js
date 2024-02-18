import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const number = () => {
    if (count === 0) {
      return "neutral number";
    } else if (count < 0) {
      return "negative number";
    } else {
      return "positive number";
    }
  };
  return (
    <div className="App">
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>

      <p>
        {count} is a {number()}
      </p>
    </div>
  );
}

export default App;
