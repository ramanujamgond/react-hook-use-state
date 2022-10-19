import React, { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState("Ramanujam");
  const [flag, setFlag] = useState(false);

  function changeName() {
    return setFlag(!flag);
  }

  return (
    <div className="App">
      <div>Hello, {flag ? name : "Priyanka"}</div>
      <br />
      <button onClick={changeName}>Click Me!</button>
    </div>
  );
}

export default App;
