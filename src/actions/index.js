import * as c from './ActionTypes';

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const unselectKeg = () => ({
  type: c.UNSELECT_KEG
});

export const deleteKeg = (id) => ({
  type: c.DELETE_KEG,
  id: id
});

export const sellKeg = (id) => ({
  type: c.SELL_KEG,
  id: id
});

export const changeSelected = (keg) => {
  const { name, brewery, alcoholContent, ibu, price, pintQuantity, id } = keg;
  return {
    type: c.CHANGE_SELECTED,
    name: name,
    brewery: brewery,
    alcoholContent: alcoholContent,
    ibu: ibu,
    price: price,
    pintQuantity: pintQuantity,
    id: id
  }
};

export const addKeg = (keg) => {
  const { name, brewery, alcoholContent, ibu, price, pintQuantity, id } = keg;
  return {
    type: c.ADD_KEG,
    name: name,
    brewery: brewery,
    alcoholContent: alcoholContent,
    ibu: ibu,
    price: price,
    pintQuantity: pintQuantity,
    id: id
  }
};
