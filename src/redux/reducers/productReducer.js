import { ActionTypes } from "../constants/action-types";
const initialState = {
  cart: [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ],
};
export const productReducer = (state = initialState, action) => {
  const product = action.payload;
  switch (action.type) {
    case ActionTypes.ADDITEM:
      const isExist = state.cart.find((x) => x.id === product.id);
      if (isExist) {
        return {
          ...state,
          cart: state.cart.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty + 1 } : x
          ),
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              ...product,
              qty: 1,
            },
          ],
        };
      }

    case ActionTypes.DELETEITEM:
      const exist = state.cart.find((x) => x.id === product.id);
      if (exist.qty === 1) {
        return {
          ...state,
          cart: state.cart.filter((x) => x.id !== exist.id),
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty - 1 } : x
          ),
        };
      }

    default:
      return state;
  }
};

// export const selectedProductsReducer = (state = {}, { type, payload }) => {
//   console.log(type);
//   switch (type) {
//     case ActionTypes.SELECTED_PRODUCTS:
//       return { ...state, products: payload };
//     default:
//       return state;
//   }
// };
