import React from 'react';
import NewKegForm from './NewKegForm';
import TapList from './TapList';

class TapControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render(){
    let currentlyVisibleState = null;
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm />
    } else {
      currentlyVisibleState = <TapList />
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default TapControl;