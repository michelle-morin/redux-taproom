import tapListReducer from '../../reducers/tap-list-reducer';
import { v4 } from 'uuid';

describe('tapListReducer', () => {

  const id1 = v4();
  const id2 = v4();

  const newKeg = {
    name: 'hazy IPA',
    brewery: 'ex novo',
    alcoholContent: 7,
    ibu: 55,
    price: 7,
    id: id1
  };

  const currentKegList = {
    id1: {
      name: 'hazy IPA',
      brewery: 'ex novo',
      alcoholContent: 7,
      ibu: 55,
      price: 7,
      id: id1
    },
    id2: {
      name: 'cucumber crush',
      brewery: '10 barrel brewing co.',
      alcoholContent: 5,
      ibu: 4,
      price: 6,
      id: id2
    }
  };

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

  test('should successfully delete a keg', () => {
    const action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(tapListReducer(currentKegList, action)).toEqual({
      id2: {
        name: 'cucumber crush',
        brewery: '10 barrel brewing co.',
        alcoholContent: 5,
        ibu: 4,
        price: 6,
        id: id2
      }
    });
  });
});