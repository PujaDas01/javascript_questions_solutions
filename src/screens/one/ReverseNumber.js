import React, { useState } from 'react';
import './reverse-number.css';

const ScreenOne = () => {
    const [reverseNumber, setReverseNumber] = useState('');
    const [reverseResult, setReverseResult] = useState('');

    const reverseHandler = () => {
      const enteredValue = reverseNumber.trim();
      const reversedValue = enteredValue.split("").reverse().join('');
      console.log('reversedValue', reversedValue);
      if(!enteredValue) {
        alert('Please enter a number.');
      } else if(isNaN(enteredValue)) {
          setReverseResult('Insert number to see a result.')
      } else {
          setReverseResult(reversedValue);
          setReverseNumber('');
      }
    }
  return (
    <div className='reverse-number-wrapper'>
        <h4 className=''>1. Write a JavaScript function that reverses a number.</h4>
        <label htmlFor='reverseNumber'>Enter Number: </label><br/>
        <input type='text' id='reverseNumber' value={reverseNumber} onChange={e => setReverseNumber(e.target.value)}/>
        <button className='reverse-button' onClick={reverseHandler}>Reverse</button>
        <h3>Output:- <span>{reverseResult}</span></h3>
    </div>
  )
}

export default ScreenOne;