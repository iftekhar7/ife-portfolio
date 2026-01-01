import  { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";

export function DropdownMenu() {
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
    <div className="dropdown-wrapper dropdown-nav-menu" ref={dropdownRef}>
      <button onClick={toggleDropdown} className='btn btn-secondary-text'>
        <i className={`fas ${isOpen? 'fa-times fa-lg':'fa-bars'}`}></i>
      </button>

      {isOpen && (
        <div className={`dropdown ${isAnimating ? "closing" : ""}`}>
          <Navbar setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
}
