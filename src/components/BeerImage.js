import React from 'react';
import beer from '../assets/beer.png';

function BeerImage(){
  return (
    <div>
      <img className="beer-image" src={beer} alt="illustration of hand holding a beer"/>
    </div>
  );
}

export default BeerImage;