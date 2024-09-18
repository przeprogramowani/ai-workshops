import {debounce} from "lodash-es";
import PropTypes from "prop-types";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import styles from "./FilterSort.module.scss";

const FilterSort = ({onFilterSort}) => {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const debouncedFilterSort = useCallback(
    debounce((filters) => {
      onFilterSort(filters);
    }, 300),
    [onFilterSort]
  );

  const filters = useMemo(
    () => ({
      category: category || undefined,
      sort: sort || undefined,
    }),
    [category, sort]
  );

  useEffect(() => {
    debouncedFilterSort(filters);
  }, [filters, debouncedFilterSort]);

  return (
    <div className={styles["filter-sort"]}>
      <select
        className={styles["filter-sort__select"]}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value=''>All Categories</option>
        <option value='smartphones'>Smartphones</option>
        <option value='laptops'>Laptops</option>
        <option value='fragrances'>Fragrances</option>
        <option value='skincare'>Skincare</option>
        <option value='groceries'>Groceries</option>
        <option value='home-decoration'>Home Decoration</option>
      </select>

      <select
        className={styles["filter-sort__select"]}
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value='' disabled>
          Sort By
        </option>
        <option value='title_asc'>Name: A to Z</option>
        <option value='title_desc'>Name: Z to A</option>
        <option value='price_asc'>Price: Low to High</option>
        <option value='price_desc'>Price: High to Low</option>
        <option value='rating_desc'>Highest Rated</option>
      </select>
    </div>
  );
};

FilterSort.propTypes = {
  onFilterSort: PropTypes.func.isRequired,
};

export default FilterSort;
