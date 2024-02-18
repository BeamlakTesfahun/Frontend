//import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (event) => {
    const value = event.target.value;
    setCelsius(value);
    setFahrenheit((value * 9) / 5 + 32);
  };
  const handleFahrenhietChange = (event) => {
    const value = event.target.value;
    setFahrenheit(value);
    setCelsius(((value - 32) * 5) / 9);
  };
  return (
    <div className="App">
      <h1>Temperature Converter</h1>
      <label>
        Celsius:
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
          placeholder="Enter Celsius temperature"
        />
        <br />
      </label>
      <label>
        Fahrenheit:
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenhietChange}
          placeholder="Enter Fahrenheit temperature"
        />
      </label>
      {celsius && <p>{celsius}°C</p>}
      {fahrenheit && <p>{fahrenheit}°F</p>}
    </div>
  );
}

export default App;
// // const [name, setName] = useState("beamlak");
// // const handleClick = () => {
// //   setName("Tesfahun");
// // };
// const [count, setCount] = useState(0);
// const [showCount, setShowCount] = useState(true);
// const handleCount = () => {
//   // setCount(count + 1);
//   setCount((prevCount) => prevCount + 1);
//   setCount((prevCount) => prevCount + 1);
// };
// const handleShowCount = () => {
//   setShowCount(true);
// };
// const handleHideCount = () => {
//   setShowCount(false);
// };

// {/* <button onClick={handleShowCount}>Show count</button>
//       <button onClick={handleHideCount}>Hide count</button>
//       {/* <button onClick={() => (prevShowCount) => !prevShowCount}>Toggle</button> */}

//       {showCount && (
//         <div>
//           <p>Count: {count}</p>
//           <button onClick={handleCount}>Count </button>
//         </div>
//       )}
//       {/* <h1>My name is {name}</h1> */}
//       {/*
//       <button onClick={handleCount}>Count </button> */} */}
