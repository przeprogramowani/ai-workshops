import PropTypes from "prop-types";
import React, {useMemo} from "react";
import {useFilterSort} from "../hooks/useFilterSort";
import {useProductFetching} from "../hooks/useProductFetching";
import Button from "./Button";
import FilterSort from "./FilterSort";
import LoadingSpinner from "./LoadingSpinner";
import ProductGrid from "./ProductGrid";
import styles from "./ProductList.module.scss";

const ProductList = ({initialProducts, initialTotal}) => {
  const {
    products,
    setProducts,
    isLoading,
    setIsLoading,
    page,
    setPage,
    hasMore,
    setHasMore,
    total,
    setTotal,
    loadMoreProducts,
  } = useProductFetching(initialProducts, initialTotal);

  const {filters, handleFilterSort} = useFilterSort(
    setProducts,
    setPage,
    setHasMore,
    setTotal,
    setIsLoading
  );

  const memoizedProductGrid = useMemo(
    () => <ProductGrid products={products} />,
    [products]
  );

  return (
    <div className={styles["product-list"]}>
      <h1 className={styles["product-list__title"]}>Our Products</h1>
      <FilterSort onFilterSort={handleFilterSort} />
      <p className={styles["product-list__total-products"]}>
        Total Products: {total}
      </p>
      {memoizedProductGrid}
      {hasMore &&
        (isLoading ? (
          <LoadingSpinner />
        ) : (
          <Button
            onClick={() => loadMoreProducts(filters)}
            disabled={isLoading}
            className={styles["product-list__load-more-button"]}
          >
            Load More Products
          </Button>
        ))}
      {!hasMore && (
        <p className={styles["product-list__no-more-products"]}>
          No more products to load.
        </p>
      )}
    </div>
  );
};

ProductList.propTypes = {
  initialProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  initialTotal: PropTypes.number.isRequired,
};

export default ProductList;
