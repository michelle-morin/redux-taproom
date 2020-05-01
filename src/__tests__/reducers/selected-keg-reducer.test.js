import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as c from './../../actions/ActionTypes';

describe('selectedKegReducer', () => {

  let action;
  const selectedKeg = {
    name: 'hazy IPA',
    brewery: 'ex novo',
    alcoholContent: 7,
    ibu: 55,
    price: 7,
    pintQuantity: 124,
    kegTappedDate: 1588356385686,
    id: 1 
  };

  test('should return default state if no action type is recognized', () => {
    expect(selectedKegReducer(null, { type: null })).toEqual(null);
  });

  test('should successfully set the selectedKeg to the keg passed to the reducer', () => {
    action = {
      type: c.CHANGE_SELECTED,
      name: 'hazy IPA',
      brewery: 'ex novo',
      alcoholContent: 7,
      ibu: 55,
      price: 7,
      pintQuantity: 124,
      kegTappedDate: 1588356385686,
      id: 1
    };
    expect(selectedKegReducer(null, action)).toEqual(selectedKeg);
  });

  test('should reset selected keg to null', () => {
    action = {
      type: c.UNSELECT_KEG
    };
    expect(selectedKegReducer(selectedKeg, action)).toEqual(null);
  });
});