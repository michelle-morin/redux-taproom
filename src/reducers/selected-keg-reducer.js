export default (state = null, action) => {
  const { name, brewery, alcoholContent, ibu, price, id } = action;
  switch(action.type) {
    case 'CHANGE_SELECTED':
      const newState = {
        name: name,
        brewery: brewery,
        alcoholContent: alcoholContent,
        ibu: ibu,
        price: price,
        id: id
      };
      return newState;
    default:
      return state;
  }
};