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
      props.binaryCheck(true);
    } else {
      setIsBin(false);
      props.binaryCheck(false);

    }
  }

  // helper function to check is number is binary
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
            placeholder="only 0s and 1s"
          />
          { (!isBin && binInput !== '') && 
            <p>This is not a Binary Number!</p>
          }
          { (binInput.length > 8) &&
            <p>No more than 8 digits!</p>
          }
          { (isBin && binInput !== '' && binInput <= 8) && 
            <h1>Your Binary Number is {binInput}.</h1>
          }
        </label>
      </div>
    );
}

export default InputForm;