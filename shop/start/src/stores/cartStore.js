import {persistentMap} from "@nanostores/persistent";
import {atom} from "nanostores";

export const isCartOpen = atom(false);

export const cartItems = persistentMap("cart:", {});

export function addToCart(product) {
  cartItems.setKey(product.id, product);
}

export function removeFromCart(productId) {
  cartItems.setKey(productId, undefined);
}
