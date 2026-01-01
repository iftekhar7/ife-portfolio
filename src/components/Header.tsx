 
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useTheme } from "./ThemeProvider"; 
import Navbar from "./Navbar";
import { DropdownMenu } from "./DropdownMenu";

const Header = () => {
  // const navigate = useNavigate();
  const [currentMode, setCurrentMode] = useLocalStorage("theme", "light");
  
  const { theme } = useTheme();
 
  return (
    <>
      <header className="header">
        <div className="header-content">
          <div
            className="header-left cursor-pointer"
            role="button" 
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
          <Navbar />
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
            {/* <Dropdown
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
            </Dropdown> */}
            <DropdownMenu />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
