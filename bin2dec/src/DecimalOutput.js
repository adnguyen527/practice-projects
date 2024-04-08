import {  useEffect, useState } from 'react';

export default function DecimalOutput(props) {
    var binArray = props.binArray;
    var isBin = props.isBin;
    const [decimalNum, setDecimalNum] = useState('');

    // when binArray is changed
    useEffect(() => {
        var sum = 0;
        // iterate through array and add the numbers to the sum
        // convert to decimal number
        for (let i = 0; i < binArray.length; i++) {
            sum += binArray[i] * Math.pow(2, i);
        }
        setDecimalNum(sum);
    }, [binArray]);

    return (
        <div className='center'>
            { !(binArray.length === 0 || !isBin || !(binArray.length <= 8)) && 
                <h1>Your Binary Number as a Decimal Number is {decimalNum}.</h1>
            }
        </div>
    );
}