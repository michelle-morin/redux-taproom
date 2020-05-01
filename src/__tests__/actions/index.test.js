import * as a from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('taproom actions', () => {
  const keg = {
    name: 'cucumber crush',
    brewery: '10 barrel brewing co.',
    alcoholContent: 5,
    ibu: 4,
    price: 6,
    pintQuantity: 124,
    kegTappedDate: 1588356385686,
    id: 2
  };

  it('should create ADD_KEG action', () => {
    expect(a.addKeg(keg)).toEqual({
      type: c.ADD_KEG,
      name: 'cucumber crush',
      brewery: '10 barrel brewing co.',
      alcoholContent: 5,
      ibu: 4,
      price: 6,
      pintQuantity: 124,
      kegTappedDate: 1588356385686,
      id: 2
    });
  });

  it('should create DELETE_KEG action', () => {
    expect(a.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  it('should create SELL_KEG action', () => {
    expect(a.sellKeg(1)).toEqual({
      type: c.SELL_KEG,
      id: 1
    });
  });

  it('should create UNSELECT_KEG action', () => {
    expect(a.unselectKeg()).toEqual({
      type: c.UNSELECT_KEG
    });
  });

  it('should create CHANGE_SELECTED action', () => {
    expect(a.changeSelected(keg)).toEqual({
      type: c.CHANGE_SELECTED,
      name: 'cucumber crush',
      brewery: '10 barrel brewing co.',
      alcoholContent: 5,
      ibu: 4,
      price: 6,
      pintQuantity: 124,
      kegTappedDate: 1588356385686,
      id: 2
    });
  });

  it('should create TOGGLE_FORM action', () => {
    expect(a.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });
});