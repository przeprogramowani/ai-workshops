import {useStore} from "@nanostores/react";
import React, {useState} from "react";
import {cartItems, removeFromCart} from "../stores/cartStore";
import Button from "./Button";
import styles from "./Cart.module.scss";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const $cartItems = useStore(cartItems);

  const toggleCart = () => setIsOpen(!isOpen);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const cartItemsArray = Object.values($cartItems);
  const totalItems = cartItemsArray.length;
  const totalPrice = cartItemsArray.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.cart}>
      <Button onClick={toggleCart} className={styles.cart__button}>
        Cart ({totalItems})
      </Button>
      {isOpen && (
        <div className={styles.cart__dropdown}>
          {cartItemsArray.map((item) => (
            <div key={item.id} className={styles.cart__item}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className={styles["cart__item-image"]}
              />
              <div className={styles["cart__item-info"]}>
                <p className={styles["cart__item-title"]}>{item.title}</p>
                <p className={styles["cart__item-price"]}>${item.price}</p>
              </div>
              <Button
                onClick={() => handleRemoveFromCart(item.id)}
                variant='secondary'
              >
                Remove
              </Button>
            </div>
          ))}
          <p>Total: ${totalPrice.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
