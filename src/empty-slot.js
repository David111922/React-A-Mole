import React, { useEffect } from 'react';
import emptyImg from './images/empty.png'; // Adjust the path as needed


function EmptySlot() {
  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 5000);
    let timer = setTimeout(() => {}, randSeconds);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <img src="/react_a-mole/src/images/molehill (1).png" alt="Empty Slot" />
    </div>
  );
}

export default EmptySlot;
