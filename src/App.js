import './App.css';
import React, { useState } from "react";


function App() {
  const [name, setName] = useState("");
  const [ETHAddress, setETHAddress] = useState("")
  var regex_first_occurrence = new RegExp('0x[a-fA-F0-9]{40}(?![a-fA-F0-9])');  
  var regex_all_occurrences = new RegExp('0x[a-fA-F0-9]{40}(?![a-fA-F0-9])', 'g');  

  function handleNameChange(e) {
    setName(e.target.value);

  }
  function findFirstEthereumAddress(description) {
    var address;
    address = description.match(regex_first_occurrence);
    return address
  }
  function findAllEthereumAddress(description) {
    var addresses;
    addresses = description.match(regex_all_occurrences);
    addresses = addresses ? addresses.join('\n') : "no match";
    return addresses
  }

  return (
    <div className="App">
      <body className="App-header">
      <textarea
        type="text"
        pattern="[0-9]"
        id="eth-address-first-occurrence"
        className="textarea input__lg"
        name="eth_adress"
        autoComplete="on"
        style={{width:"20%"}}
        onChange={handleNameChange}
      />
      Matching first occurrence:
      <p> {findFirstEthereumAddress(name)} </p>
      Match all occurrences:
      <p> {findAllEthereumAddress(name)} </p>

      </body>

    </div>
  );
}

export default App;
