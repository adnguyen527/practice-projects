import { useState } from "react";

function InputForm(props) {
  const [binInput, setBinInput] = useState('');

  const handleBinInput = event => {
        var binNumber = event.target.value;
        setBinInput(binNumber)
        props.onBinNumberEntered(binNumber);
    }
  
    return (
      <div>
        <label>
          Binary Input: 
          <input 
            value={binInput}
            onChange={handleBinInput}
          />
        </label>
      </div>
    );
}

export default InputForm;