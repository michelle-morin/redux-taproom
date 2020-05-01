import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
// import formVisibleReducer from '../../reducers/form-visible-reducer';
// import tapListReducer from '../../reducers/tap-list-reducer';
// import selectedKegReducer from '../../reducers/selected-keg-reducer';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  test('should return default state if no action type is recognized', ()=> {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      formVisible: false,
      selectedKeg: null
    });
  });

});