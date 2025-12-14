import React, { useRef, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useTheme } from "./ThemeProvider";
import { Dropdown } from "./Dropdown";
import Modal from "./Modal";
import Tabs from "./Tabs";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const [currentMode, setCurrentMode] = useLocalStorage("theme", "light");
  const [isOpenModal, setIsOpenModal] = useState<{ isOpen: boolean }>({
    isOpen: false,
  });
  const { theme } = useTheme();
  const cancelModalHandler = () => {
    setIsOpenModal({ isOpen: false });
  };
  return (
    <>
      <header className="header">
        <div className="header-content">
          <div
            className="header-left cursor-pointer"
            role="button"
            // onClick={() => navigate("/")}
          >
            <div className="nav-content">
              <div className="nav-brand">
                <div className="logo">MI</div>
                <div className="brand-info">
                  <div className="name">Mohammad Iftekhar</div>
                  <div className="title">Frontend Software Engineer</div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-right">
            <button
              className="theme-toggle-btn"
              onClick={() => {
                setCurrentMode(currentMode === "dark" ? "light" : "dark");
              }}
              title={`Switch to ${
                currentMode === "dark" ? "light" : "dark"
              } mode`}
              aria-label={`Switch to ${
                currentMode === "dark" ? "light" : "dark"
              } mode`}
            >
              <i
                className={`${theme.iconStyle} ${
                  currentMode === "dark" ? "fas fa-brightness" : "fas fa-moon"
                }`}
              ></i>
            </button> 
            <Dropdown
              placement="right"
              className="btn-secondary-text"
              icon={"fas fa-gear"}
            > 
              <li className="dropdown-menu-item">
                <i className="fa-regular fa-user" />
                My Account
              </li>
              <li
                className="dropdown-menu-item"
                onClick={() => navigate("/login")}
              >
                {" "}
                <i className="fa-solid fa-right-from-bracket"></i>Logout
              </li>
            </Dropdown>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
