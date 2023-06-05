import { ActionTypes } from "../constants/action-types";

// export const setProducts = (products) => {
//   return {
//     type: ActionTypes.SET_PRODUCTS,
//     payload: products,
//   };
// };
// export const selectProducts = (product) => {
//   return {
//     type: ActionTypes.SELECTED_PRODUCTS,
//     payload: product,
//   };
// }

//for add items to cart
export const addCart = (product) => {
  console.log("hiiii");
  return {
    type: ActionTypes.ADDITEM,
    payload: product,
  };
};
//for delete items from cart
export const deleteCart = (product) => {
  return {
    type: ActionTypes.DELETEITEM,
    payload: product,
  };
};
