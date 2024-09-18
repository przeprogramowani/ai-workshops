import PropTypes from "prop-types";
import React from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductGrid.module.scss";

const ProductGrid = ({products}) => {
  return (
    <div className={styles["product-grid"]}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProductGrid;
