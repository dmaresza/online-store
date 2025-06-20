import { CategoryItem } from "../categories/category.types";
import { createAction, withMatcher, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";

// Helper functions
const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
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

const removeCartItem = (cartItems: CartItem[], productToRemove: CartItem): CartItem[] => {
  const existingItem = cartItems.find((item) => item.id == productToRemove.id);
  if (existingItem && existingItem.quantity == 1) {
    return cartItems.filter((item) => item.id != productToRemove.id);
  }
  else {
    return cartItems.map((item) =>
      item.id == productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item);
  }
};

const deleteCartItem = (cartItems: CartItem[], productToDelete: CartItem): CartItem[] => {
  return cartItems.filter((item) => item.id != productToDelete.id);
};

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

// Action functions
export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean));

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems));

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], productToRemove: CartItem) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return setCartItems(newCartItems);
};

export const deleteItemFromCart = (cartItems: CartItem[], productToDelete: CartItem) => {
  const newCartItems = deleteCartItem(cartItems, productToDelete);
  return setCartItems(newCartItems);
};