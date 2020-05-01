import React from 'react';
import NewKegForm from './NewKegForm';
import TapList from './TapList';
import KegDetail from './KegDetail';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import * as a from '../actions';

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
      const action = a.unselectKeg();
      dispatch(action);
    } else {
      const action = a.toggleForm();
      dispatch(action);
    }
  };

  const handleAddingNewKegToList = (newKeg) => {
    const action = a.addKeg(newKeg);
    dispatch(action);
    const actionTwo = a.toggleForm();
    dispatch(actionTwo);
  };

  const handleChangingSelectedKeg = (id) => {
    const selectedKeg = props.masterKegList[id];
    const action = a.changeSelected(selectedKeg);
    dispatch(action);
  };

  const handleKegPurchase = (id) => {
    const action = a.sellKeg(id);
    dispatch(action);
    const actionTwo = a.unselectKeg();
    dispatch(actionTwo);
  };

  const handleDeletingKeg = (id) => {
    const action = a.deleteKeg(id);
    dispatch(action);
    const actionTwo = a.unselectKeg();
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