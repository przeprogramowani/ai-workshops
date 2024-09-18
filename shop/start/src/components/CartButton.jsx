import PropTypes from "prop-types";
import React, {useState, useEffect} from "react";
import Button from "./Button";

const CartButton = ({product}) => {
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    setIsInCart(!!cart[product.id]);
  }, [product.id]);

  const toggleCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    if (isInCart) {
      delete cart[product.id];
    } else {
      cart[product.id] = product;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setIsInCart(!isInCart);
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
