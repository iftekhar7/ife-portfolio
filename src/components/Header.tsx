import React, { useRef, useState } from "react"; 
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useTheme } from "./ThemeProvider"; 
import { Dropdown } from "./Dropdown";
import Modal from "./Modal";
import Tabs from "./Tabs";
import { useNavigate } from "react-router";

const settingsTabs = [
  {
    id: "organization",
    label: "organization",
    icon: 'fas fa-building',
    content: <div>
      <h6 className="text-heading ">Organization Settings</h6>
      <p className="text mb-4 font-regular">Manage your organization details and preferences.</p>
      <div className="form-group">
        <label htmlFor="orgName" className="form-label">Organization Name</label>
        <input type="text" id="orgName" className="form-control" placeholder="Enter organization name" />
      </div>
      </div>,
  },
  {
    id: "brand",
    label: "Brand",
    icon: 'fas fa-palette',
    content: <div>
      <h6 className="text-heading ">Brand Managements</h6>
      <p className="text mb-4 font-regular">Customize your brand appearance and settings.</p>
      <div className="form-group">
        <label htmlFor="brandColor" className="form-label">Brand Color</label>
        <input type="color" id="brandColor" className="form-control form-control-color" defaultValue="#563d7c" title="Choose your color" />
      </div>
    </div>,
  },
  {
    id: "product-configuration",
    label: " Product Configuration",
    icon:  ' fas fa-cogs',
    content: <div> 
      <h6 className="text-heading ">Product Configuration</h6>
      <p className="text mb-4 font-regular">Set up and manage your product configurations.</p>
      <div className="form-group">  
        <label htmlFor="productFeature" className="form-label">Enable Product Feature</label>
        <select id="productFeature" className="form-control">
          <option value="feature1">Feature 1</option>
          <option value="feature2">Feature 2</option>
          <option value="feature3">Feature 3</option>
        </select>
      </div>
    </div>,
  },
];

const Header = () => {
  const navigate = useNavigate();
  const [currentMode, setCurrentMode] = useLocalStorage("theme", "light"); 
  const [isOpenModal, setIsOpenModal] = useState<{ isOpen: boolean }>({ isOpen: false });
  const { theme } = useTheme();  
  const avatarRef = useRef(null);
  const cancelModalHandler = () => {
    setIsOpenModal({ isOpen: false });
  };
  return (
   <>
    <header className="top-header">
      <div
        className="header-left cursor-pointer"
        role="button"
        // onClick={() => navigate("/")}
      >
       <h6 className="text-sub-heading mb-0">Inspiration</h6>
      </div>
      <div className="header-right">
        <button
          className="theme-toggle-btn"
          onClick={() => {
            setCurrentMode(currentMode === "dark" ? "light" : "dark");
          }}
          title={`Switch to ${currentMode === "dark" ? "light" : "dark"} mode`}
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
        <Dropdown placement="right">  
           <li className="dropdown-menu-item" onClick={()=>navigate("/add-or-edit-setting")}><i className="fa-regular fa-gear"/>Settings</li>
           <li className="dropdown-menu-item"><i className="fa-regular fa-user"/>My Account</li>  
           <li className="dropdown-menu-item" onClick={()=>navigate('/login')}> <i className="fa-solid fa-right-from-bracket"></i>Logout</li>  
        </Dropdown>
      </div> 
    </header>
     <Modal
        modalHeading={"Settings"}
        modalType={"edit"}
        customBodyClass={"px-0 pt-0" }
        modalWidth={"modal-md"}
        isVisible={isOpenModal?.isOpen}
        onCancel={cancelModalHandler} 
      > 
        <Tabs tabs={settingsTabs} />
      </Modal>
      </>
  );
};

export default Header;
