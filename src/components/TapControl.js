import React from 'react';
import NewKegForm from './NewKegForm';
import TapList from './TapList';
import KegDetail from './KegDetail';
import { connect } from 'react-redux';

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

class TapControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleKegPurchase = (id) => {
    const kegToBePurchased = this.state.masterKegList.filter(keg => keg.id === id)[0];
    const newPintQuantity = kegToBePurchased.pintQuantity - 1;
    const updatedKeg = {...kegToBePurchased, pintQuantity: newPintQuantity};
    const previousKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: [...previousKegList, updatedKeg],
      selectedKeg: null
    });
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail 
        keg={this.state.selectedKeg}
        onClickingDelete = {this.handleDeletingKeg} />
      buttonText = "RETURN TO TAP LIST";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm 
        onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "RETURN TO TAP LIST";
    } else {
      currentlyVisibleState = <TapList 
        tapList={this.state.masterKegList}
        onKegSelection={this.handleChangingSelectedKeg}
        onClickingBuy={this.handleKegPurchase} />
      buttonText = "+ NEW KEG";
    }

    return(
      <div style={tapControlStyles}>
        <button className="reused-button" onClick={this.handleClick}>{buttonText}</button>
        {currentlyVisibleState}
      </div>
    );
  }
}

TapControl = connect()(TapControl);

export default TapControl;