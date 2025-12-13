import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

export function Dropdown(props: {
  placement: "left" | "right";
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const dropdownRef = useRef(null); 

  const { theme } = useTheme();

  // Close dropdown on outside click and escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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

  // Handle dropdown selection
  const handleOptionSelect = (value) => {
    closeDropdown();
  };

  const closeDropdown = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimating(false);
    }, 150);
  };

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="dropdown-wrapper" ref={dropdownRef}>
      <div className="user-menu">
        <button className="header-action user-btn" title="User menu">
          <div
            className="user-avatar-small"
            // ref={avatarRef}
            role="button"
            onClick={toggleDropdown}
          >
            mi
          </div>
        </button>
      </div>

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
