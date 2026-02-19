import React, { useState } from 'react';

function UpDown() {
  const [target] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('1부터 100 사이의 숫자를 맞춰보세요!');
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num)) {
      setMessage('숫자를 입력해주세요!');
      return;
    }

    setAttempts(attempts + 1);

    if (num === target) {
      setMessage(`정답입니다! ${attempts + 1}번 만에 맞추셨습니다!`);
    } else if (num < target) {
      setMessage('UP! 더 큰 숫자입니다.');
    } else {
      setMessage('DOWN! 더 작은 숫자입니다.');
    }
    
    setGuess('');
  };

  return (
    <div>
      <h2>UpDown 게임</h2>
      <p>{message}</p>
      <p>시도 횟수: {attempts}</p>
      <div>
        <input 
          type="number" 
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleGuess()}
          placeholder="숫자 입력"
        />
        <button onClick={handleGuess}>확인</button>
      </div>
    </div>
  );
}

export default UpDown;
