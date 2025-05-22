import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

// Helper functions
const addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find((item) => item.id == productToAdd.id);
  if (existingItem) {
    return cartItems.map((item) =>
      item.id == productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item);
  }
  else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingItem = cartItems.find((item) => item.id == productToRemove.id);
  if (existingItem.quantity == 1) {
    return cartItems.filter((item) => item.id != productToRemove.id);
  }
  else {
    return cartItems.map((item) =>
      item.id == productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item);
  }
};

const deleteCartItem = (cartItems, productToDelete) => {
  return cartItems.filter((item) => item.id != productToDelete.id);
};

// Action functions
export const setIsCartOpen = (bool) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const deleteItemFromCart = (cartItems, productToDelete) => {
  const newCartItems = deleteCartItem(cartItems, productToDelete);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};