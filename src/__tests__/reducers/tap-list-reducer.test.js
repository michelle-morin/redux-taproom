import tapListReducer from '../../reducers/tap-list-reducer';
import { v4 } from 'uuid';

describe('tapListReducer', () => {

  const newKeg = {
    name: 'hazy IPA',
    brewery: 'ex novo',
    alcoholContent: 7,
    ibu: 55,
    price: 7,
    id: v4()
  }

  test('should return default state if there is no action type passed into the reducer', () => {
    expect(tapListReducer({}, { type: null })).toEqual({});
  });

  test('should successfully add new keg to masterKegList', () => {
    const { name, brewery, alcoholContent, ibu, price, id } = newKeg;
    const action = {
      type: 'ADD_KEG',
      name: name,
      brewery: brewery,
      alcoholContent: alcoholContent,
      ibu: ibu,
      price: price,
      id: id
    };
    expect(tapListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brewery: brewery,
        alcoholContent: alcoholContent,
        ibu: ibu,
        price: price,
        id: id
      }
    });
  });
});