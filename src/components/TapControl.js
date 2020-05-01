import React from 'react';
import NewKegForm from './NewKegForm';
import TapList from './TapList';
import KegDetail from './KegDetail';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

const tapControlStyles = {
  position: 'relative',
  top: '20vh',
  width: '80vw',
  height: 'auto',
  marginTop: '2vh',
  marginLeft: '10vw',
  marginRight: '10vw',
  marginBottom: '10%'
}

function TapControl(props) {
  const { dispatch } = props;

  const handleClick = () => {
    if (props.selectedKeg != null) {
      const action = {
        type: 'UNSELECT_KEG'
      };
      dispatch(action);
    } else {
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  };

  const handleAddingNewKegToList = (newKeg) => {
    const { name, brewery, alcoholContent, ibu, price, pintQuantity, id } = newKeg;
    const action = {
      type: 'ADD_KEG',
      name: name,
      brewery: brewery,
      alcoholContent: alcoholContent,
      ibu: ibu,
      price: price,
      pintQuantity: pintQuantity,
      id: id
    };
    dispatch(action);
    const actionTwo = {
      type: 'TOGGLE_FORM'
    };
    dispatch(actionTwo);
  };

  const handleChangingSelectedKeg = (id) => {
    const selectedKeg = props.masterKegList[id];
    const action = {
      type: 'CHANGE_SELECTED',
      name: selectedKeg.name,
      brewery: selectedKeg.brewery,
      alcoholContent: selectedKeg.alcoholContent,
      ibu: selectedKeg.ibu,
      price: selectedKeg.price,
      pintQuantity: selectedKeg.pintQuantity,
      id: selectedKeg.id
    };
    dispatch(action);
  };

  const handleKegPurchase = (id) => {
    const action = {
      type: 'SELL_KEG',
      id: id
    };
    dispatch(action);
    const actionTwo = {
      type: 'UNSELECT_KEG'
    };
    dispatch(actionTwo);
  };

  const handleDeletingKeg = (id) => {
    const action = {
      type: 'DELETE_KEG',
      id: id
    };
    dispatch(action);
    const actionTwo = {
      type: 'UNSELECT_KEG'
    };
    dispatch(actionTwo);
  };

  let currentlyVisibleState = null;
  let buttonText = null;

  if (props.selectedKeg != null) {
    currentlyVisibleState = <KegDetail 
      keg={props.selectedKeg}
      onClickingDelete = {handleDeletingKeg} />
    buttonText = "RETURN TO TAP LIST";
  } else if (props.formVisible) {
    currentlyVisibleState = <NewKegForm 
      onNewKegCreation={handleAddingNewKegToList} />
    buttonText = "RETURN TO TAP LIST";
  } else {
    currentlyVisibleState = <TapList 
      tapList={props.masterKegList}
      onKegSelection={handleChangingSelectedKeg}
      onClickingBuy={handleKegPurchase} />
    buttonText = "+ NEW KEG";
  }

  return(
    <div style={tapControlStyles}>
      <Button className="reused-button" onClick={handleClick}>{buttonText}</Button>
      {currentlyVisibleState}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisible: state.formVisible,
    selectedKeg: state.selectedKeg
  }
};

TapControl.propTypes = {
  masterKegList: PropTypes.object,
  selectedKeg: PropTypes.object,
  formVisible: PropTypes.bool
}

TapControl = connect(mapStateToProps)(TapControl);

export default TapControl;