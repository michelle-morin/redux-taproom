import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { name, brewery, alcoholContent, ibu, price, pintQuantity, id } = action;
  switch(action.type) {
    case c.CHANGE_SELECTED:
      const newState = {
        name: name,
        brewery: brewery,
        alcoholContent: alcoholContent,
        ibu: ibu,
        price: price,
        pintQuantity: pintQuantity,
        id: id
      };
      return newState;
    case c.UNSELECT_KEG:
      return null;
    default:
      return state;
  }
};