import {useCallback, useState} from "react";
import {getAllProducts, getProductsByCategory} from "../lib/api";

export const useFilterSort = (
  setProducts,
  setPage,
  setHasMore,
  setTotal,
  setIsLoading
) => {
  const [filters, setFilters] = useState({});

  const handleFilterSort = useCallback(
    async (newFilters) => {
      setIsLoading(true);
      try {
        const {category, ...otherFilters} = newFilters;
        const fetchFunction = category ? getProductsByCategory : getAllProducts;
        const params = category
          ? [category, 12, 0, otherFilters]
          : [12, 0, otherFilters];

        const {products: filteredProducts, total: newTotal} =
          await fetchFunction(...params);

        setProducts(filteredProducts);
        setPage(1);
        setFilters(newFilters);
        setHasMore(true);
        setTotal(newTotal);
      } catch (error) {
        console.error("Error applying filters:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [setProducts, setPage, setHasMore, setTotal, setIsLoading]
  );

  return {
    filters,
    handleFilterSort,
  };
};
