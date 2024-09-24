import { INCREASE_QUANTITY, DECREASE_QUANTITY } from "./action";

const initialState = {
  cart: [
    {
      id: 1,
      title: "Rolex Watch",
      price: 999.99,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png",
      quantity: 1,
    },
    {
      id: 2,
      title: "Apple MacBook 14",
      price: 1999.99,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
      quantity: 1,
    },
  ],
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload && item.quantity>1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
     return state;
  }
};