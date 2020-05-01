export default (state = {}, action) => {
  const { name, brewery, alcoholContent, ibu, price, id } = action;
  switch(action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id] : {
          name: name,
          brewery: brewery,
          alcoholContent: alcoholContent,
          ibu: ibu,
          price: price,
          id: id
        }
      });
    default:
      return state;
  }
};