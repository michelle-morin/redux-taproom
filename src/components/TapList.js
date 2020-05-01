import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function TapList(props){

  const tapListStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  }

  return(
    <div style={tapListStyles}>
      {Object.values(props.tapList).sort((a,b) => {
        return (a.kegTappedDate - b.kegTappedDate);
      }).map((keg) => {
        return (
          <Keg whenBuyClicked = {props.onClickingBuy}
            whenKegClicked = {props.onKegSelection}
            name={keg.name}
            brewery={keg.brewery}
            alcoholContent={keg.alcoholContent}
            ibu={keg.ibu}
            price={keg.price}
            pintQuantity={keg.pintQuantity}
            kegTappedDate={keg.kegTappedDate}
            id={keg.id}
            key={keg.id} />
        );
      })}
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.object,
  onKegSelection: PropTypes.func,
  onClickingBuy: PropTypes.func
}

export default TapList;