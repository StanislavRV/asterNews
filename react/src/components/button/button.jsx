import React from "react";
import "./button.scss";

export default function Button({ children, ...props }) {
  return ( 
  <button {...props}>
      {children}
  </button>
  );
}