import formVisibleReducer from './form-visible-reducer';
import tapListReducer from './tap-list-reducer';
import selectedKegReducer from './selected-keg-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterKegList: tapListReducer,
  formVisible: formVisibleReducer,
  selectedKeg: selectedKegReducer
});

export default rootReducer;