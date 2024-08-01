import React, { useState, useCallback } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

// Utility functions for debouncing and throttling
const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function (...args) {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

export default function ButtonBlack({
  text = "Button",
  fun = () => {},
  width = "auto",
  radius = "0.375rem", // Default border-radius
  size = "1rem", // Default font size
  style = {},
  effect = true,
  debounceTime = 300,
  throttleTime = 300,
  disable=false
}) {
  const [isPressed, setIsPressed] = useState(false);

  // Use useCallback to memoize the debounced or throttled fun function
  const handleButtfun = useCallback(
    throttle(() => {
      setIsPressed(true);
      setTimeout(() => setIsPressed(false), 300);
      fun();
    }, throttleTime),
    [fun, throttleTime]
  );

  const buttonClasses = classNames(
    "p-2 rounded shadow-lg border border-gray-600 bg-black font-medium text-slate-50 min-w-fit h-fit transition-all duration-300 select-none",
    {
      "bg-gray-100 text-slate-900": isPressed,
      "shadow-2xl shadow-indigo-400": isPressed && effect
    }
  );

  return (
    <button
      className={buttonClasses}
      onClick={handleButtfun}
      style={{
        width,
        borderRadius: radius,
        fontSize: size,
        ...style
      }}
      disabled={disable}
    >
      {text}
    </button>
  );
}

ButtonBlack.propTypes = {
  text: PropTypes.string,
  fun: PropTypes.func,
  width: PropTypes.string,
  radius: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  effect: PropTypes.bool,
  debounceTime: PropTypes.number,
  throttleTime: PropTypes.number
};
