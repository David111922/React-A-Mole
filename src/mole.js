import React, { useEffect } from 'react';
import moleImg from './images/mole.png'; // Adjust the path as needed

function Mole({ setScore }) {
  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 1000);
    let timer = setTimeout(() => {
      setScore(score => score + 1);
    }, randSeconds);
    return () => clearTimeout(timer);
  }, [setScore]);

  return (
    <div>
      <img src={moleImg} alt="Mole" onClick={() => setScore(score => score + 1)} />
    </div>
  );
}

export default Mole;
