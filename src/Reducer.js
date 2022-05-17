export const initialState = {
  cart: [],
};

const reducer = (state = initialState, action) => {
  console.log(action, "reducer");
  switch (action.type) {
    case "ADD_TO_CART":
      localStorage.setItem(
        "cart",
        JSON.stringify({ ...state, cart: [...state.cart, action.item] })
      );
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      let newCart = [...state.cart];
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      if (index >= 0) {
        newCart.splice(index, 1);

        localStorage.setItem(
          "cart",
          JSON.stringify({ ...state, cart: newCart })
        );
      }
      break;
    default:
      return { ...state, cart: newCart };
  }
};

export default reducer;
