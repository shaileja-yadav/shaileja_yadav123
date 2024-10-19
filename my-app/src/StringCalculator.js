
import React, { useState } from 'react';
import { add } from './utils/stringCalculator';

function StringCalculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    try {
      const total = add(input);
      setResult(`The sum is: ${total}`);
    } catch (error) {
      setResult(error.message);
    }
  };

  return (
    <div>
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
      />
      <button onClick={handleCalculate}>Calculate</button>
      <p>{result}</p>
    </div>
  );
}

export default StringCalculator;