import React, { useState, useEffect, useRef } from "react";

export function Dropdown(props: {
  placement: "left" | "right";
  children: React.ReactNode;
  className?: string;
  title?: string;
  icon?: string;
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown on outside click and escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const closeDropdown = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimating(false);
    }, 150);
  };

  const toggleDropdown = () => setIsOpen((prev: boolean) => !prev);

  return (
    <div className="dropdown-wrapper" ref={dropdownRef}>
      <button onClick={toggleDropdown} className={`btn ${props?.className}`}>
        <i className={props?.icon}></i>
      </button>

      {isOpen && (
        <div
          className={`dropdown ${isAnimating ? "closing" : ""} ${
            props?.placement === "right" ? "dropdown-right" : "dropdown-left"
          }`}
        >
          <ul className="dropdown-menu" role="menu">
            {props.children}
          </ul>
        </div>
      )}
    </div>
  );
}
