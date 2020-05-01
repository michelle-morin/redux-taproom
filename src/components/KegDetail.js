import React from "react";
import BeerImage from './BeerImage';
import PropTypes from 'prop-types';

function KegDetail(props){
  const { keg, onClickingDelete } = props;

  const kegDetailStyles = {
    marginTop: '2%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  function isDeletable(quantity) {
    if (quantity <= 0) {
      return <button className="delete-button" onClick={()=> onClickingDelete(keg.id)}>DELETE KEG</button>
    }
  };

  return (
    <div style={kegDetailStyles}>
      <BeerImage />
      <div className="beer-details">
        <h1>{keg.name}</h1>
        <p>Brewed by: {keg.brewery}</p>
        <p>ABV: {keg.alcoholContent}% | IBU: {keg.ibu}</p>
        <p>${keg.price} per pint</p>
        <p>Pints in keg: {keg.pintQuantity}</p>
        <p>Tapped on {new Date(keg.kegTappedDate).toLocaleString()}</p>
        {isDeletable(keg.pintQuantity)}
      </div>
    </div>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default KegDetail;