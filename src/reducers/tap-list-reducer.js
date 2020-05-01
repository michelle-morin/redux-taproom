export default (state = {}, action) => {
  const { name, brewery, alcoholContent, ibu, price, pintQuantity, id } = action;
  switch(action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
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
    case 'DELETE_KEG':
      const newTapList = { ...state };
      delete newTapList[id];
      return newTapList;
    case 'SELL_KEG':
      const soldKegPintQuantity = state[id].pintQuantity - 1;
      const updatedTapList = { ...state, [id]: { ...state[id], pintQuantity: soldKegPintQuantity }};
      return updatedTapList;
    default:
      return state;
  }
};