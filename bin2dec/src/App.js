import './App.css';
import { useState } from 'react';
import InputForm from './InputForm.js';
import DecimalOutput from './DecimalOutput';

function App() {
  const [binInput, setBinInput] = useState('');

  const handleBinInput = (binNumber) => {
    setBinInput(binNumber);
  }

  return (
    <>
      <InputForm 
        onBinNumberEntered={handleBinInput}
      />
      { binInput !== '' &&
        <h1>Your bin num is {binInput}</h1>
      }
      <DecimalOutput 
        binNumber={binInput}
      />
    </>
  );
}

export default App;
