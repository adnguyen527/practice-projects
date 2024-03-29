import { useState } from "react";

function InputForm(props) {
  const [binInput, setBinInput] = useState('');
  const [isBin, setIsBin] = useState('');

  const handleBinInput = event => {
    // check if number is a binary
    var binNumber = event.target.value;
    setBinInput(binNumber);
    var binArray = binNumber.split('').reverse();
    if (isBinary(binArray)) {
      setIsBin(true);
      props.onBinNumberEntered(binArray);
    } else setIsBin(false);
  }

  function isBinary(array) {
    for (var i of array) {
      if (i !== '0' && i !== '1') return false;
    }
    return true;
  }
  
    return (
      <div>
        <label>
          Binary Input: 
          <input 
            value={binInput}
            onChange={handleBinInput}
          />
          { (!isBin && binInput !== '') && 
            <p>This is not a Binary Number!</p>
          }
          { (isBin && binInput !== '') && 
            <h1>Your Binary Number is {binInput}.</h1>
          }
        </label>
      </div>
    );
}

export default InputForm;