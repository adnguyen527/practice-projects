import './App.css';
import { useState } from 'react';
import InputForm from './InputForm.js';
import DecimalOutput from './DecimalOutput';

function App() {
  const [binArray, setBinArray] = useState('');

  const handleBinInput = (binArray) => {
    setBinArray(binArray);
  }

  return (
    <>
      <InputForm 
        onBinNumberEntered={handleBinInput}
      />
      <DecimalOutput 
        binArray={binArray}
      />
    </>
  );
}

export default App;
