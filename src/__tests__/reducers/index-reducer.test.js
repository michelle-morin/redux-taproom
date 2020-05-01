import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import tapListReducer from '../../reducers/tap-list-reducer';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import selectedKegReducer from '../../reducers/selected-keg-reducer';
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

  test('that initial state of tapListReducer matches rootReducer', () => {
    expect(store.getState().masterKegList).toEqual(tapListReducer(undefined, { type: null }));
  });

  test('that initial state of formVisibleReducer matches rootReducer', () => {
    expect(store.getState().formVisible).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('that initial state of selectedKegReducer matches rootReducer', () => {
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, { type: null }));
  });
});