import './App.css';
import React, { useState } from "react";


function App() {
  const [name, setName] = useState("");

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
    if (!addresses) {
      addresses = []
    }
    addresses = [...new Set(addresses)]
    return addresses
  }

  return (
    <div className="App">
      <body className="App-header">
      <textarea
        type="text"
        id="eth-address-first-occurrence"
        className="textarea input__lg"
        name="eth_address"
        style={{width:"40%"}}
        onChange={handleNameChange}
      />
      Matching first occurrence:
      <p> {findFirstEthereumAddress(name)} </p>
      Number of unique matches: {findAllEthereumAddress(name).length}
      {findAllEthereumAddress(name).map((item, index) => <p key={index}>{item}</p>)}
      {console.log(findAllEthereumAddress(name).join('\n'))}

      </body>

    </div>
  );
}

export default App;
