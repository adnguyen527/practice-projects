import {  useEffect, useState } from 'react';

export default function DecimalOutput(props) {
    var binArray = props.binArray;
    const [decimalNum, setDecimalNum] = useState('');

    useEffect(() => {
        var sum = 0;
        // iterate through array and add the numbers to the sum
        for (let i = 0; i < binArray.length; i++) {
            sum += binArray[i] * Math.pow(2, i);
        }
        setDecimalNum(sum);
    }, [binArray]);

    return (
        <>
            { !(binArray.length === 0) && 
                <h1>Your Binary Number as a Decimal Number is {decimalNum}.</h1>
            }
        </>
    );
}