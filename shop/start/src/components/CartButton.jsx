import {useStore} from "@nanostores/react";
import PropTypes from "prop-types";
import React from "react";
import {addToCart, cartItems, removeFromCart} from "../stores/cartStore";
import Button from "./Button";

const CartButton = ({product}) => {
  const $cartItems = useStore(cartItems);

  const isInCart = !!$cartItems[product.id];

  const toggleCart = () => {
    if (isInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <Button variant='primary' onClick={toggleCart}>
      {isInCart ? "Remove from Cart" : "Add to Cart"}
    </Button>
  );
};

CartButton.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartButton;
