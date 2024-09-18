import {persistentMap} from "@nanostores/persistent";

export const cartItems = persistentMap("cart:", {});

export function addToCart(product) {
  cartItems.setKey(product.id, product);
}

export function removeFromCart(productId) {
  cartItems.setKey(productId, undefined);
}
