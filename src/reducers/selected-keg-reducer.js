export default (state = null, action) => {
  const { name, brewery, alcoholContent, ibu, price, pintQuantity, id } = action;
  switch(action.type) {
    case 'CHANGE_SELECTED':
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
    case 'UNSELECT_KEG':
      return null;
    default:
      return state;
  }
};