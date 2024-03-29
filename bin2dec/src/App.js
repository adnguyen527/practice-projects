import './App.css';
import { useState } from 'react';

function App() {
  return (
    <>
      <InputForm />
    </>
  );
}

function InputForm() {
  const [binInput, setBinInput] = useState('');
  return (
    <div>
      <label>
        Binary Input: 
        <input 
          value={binInput}
          onChange={e => setBinInput(e.target.value)}
        />
      </label>
      <hr />
      {binInput !== '' &&
        <h1>Your binary number is {binInput}</h1>
      }
    </div>
  );
}

export default App;
