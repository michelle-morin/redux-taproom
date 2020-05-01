import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

function Keg(props) {

  function inStock(quantity) {
    return quantity > 10 ? <Button className="buy-button" onClick={() => props.whenBuyClicked(props.id)}>BUY</Button>
    : quantity <= 10 && quantity > 0 ? <Button className="buy-button almost-gone" onClick={() => props.whenBuyClicked(props.id)}>BUY(ALMOST GONE!)</Button>
    : <p className="empty-keg">keg is empty!</p>
  };

  const kegStyles = {
    textAlign: 'center',
    border: '2px solid rgb(70,108,82)',
    width: '400px',
    height: '400px',
    padding: '2%',
    margin: '1%',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.10)'
  };

  return(
    <Card style={kegStyles} id={props.id}>
      <h2 className="beer-name">{props.name}</h2>
      <p>{props.brewery}</p>
      <p>ABV: {props.alcoholContent}% | IBU: {props.ibu}</p>
      <p>${props.price} per pint</p>
      {inStock(props.pintQuantity)}
      <Button className="details-button" onClick = {()=> props.whenKegClicked(props.id)}>DETAILS</Button>
    </Card>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brewery: PropTypes.string,
  alcoholContent: PropTypes.number,
  ibu: PropTypes.number,
  price: PropTypes.number,
  pintQuantity: PropTypes.number,
  kegTappedDate: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenBuyClicked: PropTypes.func
}

export default Keg;