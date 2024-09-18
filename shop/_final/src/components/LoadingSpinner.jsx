import PropTypes from "prop-types";
import styles from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={styles["loading-spinner"]}>
      <div className={styles["loading-spinner__spinner"]}></div>
      <p className={styles["loading-spinner__text"]}>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
