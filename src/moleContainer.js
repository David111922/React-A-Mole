// EmptySlot: Represents an empty molehill or invalid location to click.
//  It also has a timer to cycle the display and renders when displayMole === false.
import React, { useState, useEffect } from 'react';
import Mole from './mole';
import EmptySlot from './empty-slot'

function MoleContainer({setScore}) {
  const [displayMole, setDisplayMole] = useState(false);

  const handleClick = () => {
    setScore(score => score + 1);
    setDisplayMole(false);
  };

  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 8000);
    let timer = setTimeout(() => {
      setDisplayMole(true);
    //   setTimeout(() => setDisplayMole(false), 1000);
    }, randSeconds);
    return () => clearTimeout(timer);
  }, [displayMole]);

  return (


    
    <div style={{'display': 'inline-block', 'width': '30vw'}} onClick={handleClick}>
       {displayMole ? <Mole setScore={setScore} /> : <EmptySlot />}
    </div>
  );
}

export default MoleContainer;
