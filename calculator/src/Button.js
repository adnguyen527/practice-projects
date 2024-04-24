import React from 'react'

const Button = (props) => {
    const label = props.label;
    
    const setBGcolor = () => {
        const orangeButtons = ['divide','multiply','sub','add','equal'];
        const darkGreyButtons = ['.','0','1','2','3','4','5','6','7','8','9'];
        const lightGreyButtons = ['reset','negative'];
        console.log('set')
        orangeButtons.forEach(item => {
            if (label === item) return 'orange';
            console.log('orange');
        });
        darkGreyButtons.forEach(item => {
            if (label === item) return 'darkGrey';
        });
        lightGreyButtons.forEach(item => {
            if (label === item) return 'lightGrey';
        });
    }

    const handleClick = () => {
        console.log(label);
    }

    return (
        <input 
        className={`round ${setBGcolor()}`}
        type='button' 
        value={label}
        onClick={handleClick}
        />
    )
};

export default Button;