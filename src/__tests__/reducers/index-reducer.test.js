import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import tapListReducer from '../../reducers/tap-list-reducer';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import selectedKegReducer from '../../reducers/selected-keg-reducer';

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

  test('that tapListReducer ADD_KEG action matches rootReducer', () => {
    const action = {
      type: 'ADD_KEG',
      name: 'hazy IPA',
      brewery: 'ex novo',
      alcoholContent: 7,
      ibu: 55,
      price: 7,
      pintQuantity: 124,
      id: 1
    };
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(tapListReducer(undefined, action));
  });

  test('that tapListReducer DELETE_KEG action matches rootReducer', () => {
    const action = {
      type: 'DELETE_KEG',
      id: 1
    };
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(tapListReducer(undefined, action));
  });

  test('that formVisibleReducer TOGGLE_FORM action matches rootReducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    };
    store.dispatch(action);
    expect(store.getState().formVisible).toEqual(formVisibleReducer(undefined, action));
  });

  test('that selectedKegReducer CHANGE_SELECTED action matches rootReducer', () => {
    const action = {
      type: 'CHANGE_SELECTED',
      name: 'hazy IPA',
      brewery: 'ex novo',
      alcoholContent: 7,
      ibu: 55,
      price: 7,
      pintQuantity: 124,
      id: 1
    };
    store.dispatch(action);
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, action));
  });

  test('that selectedKegReducer UNSELECT_KEG action matches rootReducer', () => {
    const action = {
      type: 'UNSELECT_KEG'
    };
    store.dispatch(action);
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, action));
  });
});