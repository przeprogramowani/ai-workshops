import {useCallback, useState} from "react";
import {getAllProducts, getProductsByCategory} from "../lib/api";

const PRODUCTS_PER_PAGE = 12;

export const useProductFetching = (initialProducts = [], initialTotal = 0) => {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(initialTotal);

  const loadMoreProducts = useCallback(
    async (filters = {}) => {
      if (isLoading || !hasMore) return;
      setIsLoading(true);

      try {
        const {category} = filters;
        const fetchFunction = category ? getProductsByCategory : getAllProducts;
        const offset = page * PRODUCTS_PER_PAGE;
        const params = category
          ? [category, PRODUCTS_PER_PAGE, offset, filters]
          : [PRODUCTS_PER_PAGE, offset, filters];

        const {products: newProducts} = await fetchFunction(...params);

        if (newProducts.length === 0) {
          setHasMore(false);
        } else {
          setProducts((prevProducts) => [
            ...prevProducts,
            ...newProducts.filter(
              (newProduct) => !prevProducts.some((p) => p.id === newProduct.id)
            ),
          ]);
          setPage((prevPage) => prevPage + 1);
        }
      } catch (error) {
        console.error("Error loading more products:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, hasMore, page]
  );

  return {
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
  };
};
