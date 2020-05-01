import tapListReducer from '../../reducers/tap-list-reducer';

describe('tapListReducer', () => {

  test('should return default state if there is no action type passed into the reducer', () => {
    expect(tapListReducer({}, { type: null })).toEqual({});
  });
});