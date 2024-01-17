import * as React from "react";
import './style.css'; 

export default function BasicGrid({ children }) {
  return (
    <div className="flexbox-container">
      {children}
    </div>
  );
}
