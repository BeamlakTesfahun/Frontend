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

