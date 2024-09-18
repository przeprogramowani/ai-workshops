import PropTypes from "prop-types";
import React from "react";
import styles from "./Button.module.scss";

const Button = React.memo(
  ({
    variant = "primary",
    type = "button",
    href,
    target,
    className,
    children,
    disabled,
    id,
    onClick,
  }) => {
    const classes = `${styles.button} ${styles[`button--${variant}`]} ${
      className || ""
    }`;

    if (type === "link") {
      return (
        <a
          className={classes}
          href={href}
          target={target}
          id={id}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        className={classes}
        type={type}
        id={id}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  type: PropTypes.oneOf(["button", "submit", "reset", "link"]),
  href: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
