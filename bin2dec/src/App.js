import './styles.css';
import { useState } from 'react';
import InputForm from './InputForm.js';
import DecimalOutput from './DecimalOutput';

function App() {
  const [binArray, setBinArray] = useState('');
  const [isBin, setIsBin] = useState('');

  const handleBinInput = (binArray) => {
    setBinArray(binArray);
  }

  const handleBinCheck = (isBin) => {
    setIsBin(isBin);
  }

  return (
    <div className='center'>
      <InputForm
        onBinNumberEntered={handleBinInput}
        binaryCheck={handleBinCheck}
      />
      <DecimalOutput 
        binArray={binArray}
        isBin={isBin}
      />
    </div>
  );
}

export default App;
