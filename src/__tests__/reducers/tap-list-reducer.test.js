import tapListReducer from '../../reducers/tap-list-reducer';
import { v4 } from 'uuid';

describe('tapListReducer', () => {

  let action;

  const newKeg = {
    name: 'hazy IPA',
    brewery: 'ex novo',
    alcoholContent: 7,
    ibu: 55,
    price: 7,
    pintQuantity: 124,
    id: 1
  };

  const currentState = {
    1: {
      name: 'hazy IPA',
      brewery: 'ex novo',
      alcoholContent: 7,
      ibu: 55,
      price: 7,
      pintQuantity: 124,
      id: 1
    },
    2: {
      name: 'cucumber crush',
      brewery: '10 barrel brewing co.',
      alcoholContent: 5,
      ibu: 4,
      price: 6,
      pintQuantity: 124,
      id: 2
    }
  };

  test('should return default state if there is no action type passed into the reducer', () => {
    expect(tapListReducer({}, { type: null })).toEqual({});
  });

  test('should successfully add new keg to masterKegList', () => {
    const { name, brewery, alcoholContent, ibu, price, pintQuantity, id } = newKeg;
    action = {
      type: 'ADD_KEG',
      name: name,
      brewery: brewery,
      alcoholContent: alcoholContent,
      ibu: ibu,
      price: price,
      pintQuantity: pintQuantity,
      id: id
    };
    expect(tapListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brewery: brewery,
        alcoholContent: alcoholContent,
        ibu: ibu,
        price: price,
        pintQuantity: pintQuantity,
        id: id
      }
    });
  });

  test('should successfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(tapListReducer(currentState, action)).toEqual({
      [2] : {
        name: 'cucumber crush',
        brewery: '10 barrel brewing co.',
        alcoholContent: 5,
        ibu: 4,
        price: 6,
        pintQuantity: 124,
        id: 2
      }
    });
  });

  test('should successfully decrement pint quantity by 1', () => {
    action = {
      type: 'SELL_KEG',
      id: 1
    };
    expect(tapListReducer(currentState, action)).toEqual({
      1: {
        name: 'hazy IPA',
        brewery: 'ex novo',
        alcoholContent: 7,
        ibu: 55,
        price: 7,
        pintQuantity: 123,
        id: 1
      },
      2: {
        name: 'cucumber crush',
        brewery: '10 barrel brewing co.',
        alcoholContent: 5,
        ibu: 4,
        price: 6,
        pintQuantity: 124,
        id: 2
      }
    });
  });
});