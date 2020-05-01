import React from 'react';
import beer from '../assets/beer.png';

function BeerImage(){
  return (
    <img className="beer-image" src={beer} alt="illustration of hand holding a beer"/>
  );
}

export default BeerImage;