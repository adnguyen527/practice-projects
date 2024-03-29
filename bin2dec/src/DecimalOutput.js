import {  useEffect, useState } from 'react';

export default function DecimalOutput(props) {
    var binNumber = props.binNumber;
    const [decimalNum, setDecimalNum] = useState('');

    useEffect(() => {
        var binArray = binNumber.split('').reverse();
        var sum = 0;
        // iterate through array and add the numbers to the sum
        for (let i = 0; i < binArray.length; i++) {
            sum += binArray[i] * Math.pow(2, i);
        }
        setDecimalNum(sum);
    }, [binNumber]);

    return (
        <>
            { binNumber !== '' && 
                <h1>Your Binary Number as a Decimal Number is {decimalNum}.</h1>
            }
        </>
    );
}