import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe('selectedKegReducer', () => {
  test('should return default state if no action type is recognized', () => {
    expect(selectedKegReducer(null, { type: null })).toEqual(null);
  });

  test('should successfully set the selectedKeg to the keg passed to the reducer', () => {
    const action = {
      type: 'CHANGE_SELECTED',
      name: 'hazy IPA',
      brewery: 'ex novo',
      alcoholContent: 7,
      ibu: 55,
      price: 7,
      id: 1
    };
    expect(selectedKegReducer(null, action)).toEqual({
      [1]: {
        name: 'hazy IPA',
        brewery: 'ex novo',
        alcoholContent: 7,
        ibu: 55,
        price: 7,
        id: 1 
      }
    });
  });
});