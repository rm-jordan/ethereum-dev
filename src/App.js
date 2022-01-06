import { useState } from "react";
import { ethers } from "ethers";
import "./App.css";
import Greeter from "./artifacts/contracts/Greeter.sol/Greeter.json";

// store our contract in a variable

const greeterAddress = " 0x5fbdb2315678afecb367f032d93f642f64180aa3";

function App() {
  const [greeting, setGreetingValue] = useState();
  // if UI needed updating create another useState here instead of console.log and render it

  // connects to metamask wallet of the user when we create a transaction - function prompts user
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  // looking for metamask extension to be connected, if metamask is installed in browser then window.ethereum to be injected (are you using metamask? yes! --> carry on and create new provider)
  async function fetchGreeting() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // now create new instance of contract
      const contract = new ethers.Contract(
        greeterAddress,
        Greeter.abi,
        provider
      );

      try {
        const data = await contract.greet();
        console.log("data: ", data);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  }

  async function setGreeting() {
    if (!greeting) return;
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log({ provider });
      const signer = provider.getSigner();
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
      const transaction = await contract.setGreeting(greeting);
      await transaction.wait();
      fetchGreeting();
    }
  }

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
