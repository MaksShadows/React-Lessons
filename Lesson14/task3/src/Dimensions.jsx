import React, { useState, useEffect } from 'react';

const Dimensions = () => {
  const [demensions, setDimensions] = useState({
    width: null,
    height: null
  });

  useEffect(() =>{
    const  {innerHeight ,innerWidth} = window;

    setDimensions({ width: innerWidth, height: innerHeight});

    const handleResize = e => {
      const  {innerHeight ,innerWidth} = e.target;
      setDimensions({ width: innerWidth, height: innerHeight});
    };
    window.addEventListener('resize' , handleResize);

    return () => {
      debugger;
      window.removeEventListener('resize' , handleResize);
    }
  }, [] );

  const { width, height} = demensions;

  return (
    // <!-- 708px - width, 798px - heigh -->
<div className="dimensions">{width}px - {height}px</div>
  )
}

export default Dimensions;
