import React, { useState } from 'react';
import Counter from './components/Counter'

function App() {
  let [value, setValue] = useState('Text')
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
