import React, { useState } from 'react';

function App() {
  let [count, setCount] = useState(0)
  let [value, setValue] = useState('Text')
  return (
    <div className="App">
      <h1>{count}</h1>
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button onClick={() => setCount(count += 1)}>Increment</button>
      <button onClick={() => setCount(count -= 1)}>Decrement</button>
    </div>
  );
}

export default App;
