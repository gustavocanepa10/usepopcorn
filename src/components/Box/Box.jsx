import { useState } from "react";

// Esboço

export function Box({children} ) {
  const [isOpen, setIsOpen] = useState(true);
    return <div className="box">
    <button
      className="btn-toggle"
      onClick={() =>  setIsOpen((open) => !open)}
    >
      { isOpen ? "–" : "+"}
    </button>
    { isOpen && (

    children
      
    )}
  </div>
}