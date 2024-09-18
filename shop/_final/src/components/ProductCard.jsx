import PropTypes from "prop-types";
import React from "react";
import Button from "./Button";
import CartButton from "./CartButton";
import styles from "./ProductCard.module.scss";

const ProductCard = React.memo(({product}) => {
  return (
    <div className={styles["product-card"]}>
      <img
        className={styles["product-card__image"]}
        src={product.thumbnail}
        alt={product.title}
      />
      <h3 className={styles["product-card__title"]}>{product.title}</h3>
      <p className={styles["product-card__price"]}>${product.price}</p>
      <div className={styles["product-card__buttons"]}>
        <Button
          variant='secondary'
          type='link'
          href={`/products/${product.id}`}
          className={styles["product-card__button--secondary"]}
        >
          View Details
        </Button>
        <CartButton product={product} />
      </div>
    </div>
  );
});

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
