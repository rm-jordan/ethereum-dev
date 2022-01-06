import { useState } from "react";
import { ethers } from "ethers";
import "./App.css";
import Greeter from "./artifacts/contracts/Greeter.sol/Greeter.json";

// store our contract in a variable

const greeterAddress = " 0x5fbdb2315678afecb367f032d93f642f64180aa3";

function App() {
  const [greeting, setGreetingValue] = useState();

  // connects to metamask wallet of the user when we create a transaction
  async function requestAccount() {}

  async function fetchGreeting() {}

  async function setGreeting() {}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
