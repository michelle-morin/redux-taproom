import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function Keg(props) {

  function inStock(quantity) {
    return quantity > 10 ? <Button className="buy-button" onClick={() => props.whenBuyClicked(props.id)}>BUY</Button>
    : quantity <= 10 && quantity > 0 ? <Button className="buy-button almost-gone" onClick={() => props.whenBuyClicked(props.id)}>BUY(ALMOST GONE!)</Button>
    : <p className="empty-keg">keg is empty!</p>
  };

  const kegStyles = {
    textAlign: 'center',
    border: '2px solid #388087',
    width: '300px',
    height: '300px',
    padding: '1%',
    margin: '1%'
  };

  return(
    <div style={kegStyles} id={props.id}>
      <h2 className="beer-name">{props.name}</h2>
      <p>{props.brewery}</p>
      <p>ABV: {props.alcoholContent}% | IBU: {props.ibu}</p>
      <p>${props.price} per pint</p>
      {inStock(props.pintQuantity)}
      <Button className="details-button" onClick = {()=> props.whenKegClicked(props.id)}>DETAILS</Button>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brewery: PropTypes.string,
  alcoholContent: PropTypes.number,
  ibu: PropTypes.number,
  price: PropTypes.number,
  pintQuantity: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenBuyClicked: PropTypes.func
}

export default Keg;