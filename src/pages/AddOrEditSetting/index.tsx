import React, { useState } from "react";
import Tabs from "../../components/Tabs";
import Select from "react-select";
import { useNavigate } from "react-router-dom"; 
import ProductTypeWizard from "./ProductConfiguration";

function AddOrEditSetting() {
  const navigate = useNavigate(); 
 

  const settingsTabs = [
    {
      id: "organization",
      label: "organization",
      icon: "fas fa-building",
      content: (
        <div>
          <h6 className="text-heading">Organization Settings</h6>
          <p className="text mb-4 font-regular">
            Manage your organization details and preferences.
          </p>

          <div className="form-group">
            <label htmlFor="orgName" className="form-label">
              Organization Name
            </label>
            <input
              type="text"
              id="orgName"
              className="form-control"
              placeholder="Enter organization name"
            />
          </div>
        </div>
      ),
    },

    {
      id: "brand",
      label: "Brand",
      icon: "fas fa-palette",
      content: (
        <div>
          <h6 className="text-heading">Brand Management</h6>
          <p className="text mb-4 font-regular">
            Customize your brand appearance and settings.
          </p>

          <div className="form-group">
            <label htmlFor="brandColor" className="form-label">
              Brand Color
            </label>
            <input
              type="color"
              id="brandColor"
              className="form-control form-control-color"
              defaultValue="#563d7c"
              title="Choose your brand color"
            />
          </div>
        </div>
      ),
    },

    {
      id: "product-configuration",
      label: "Product Configuration",
      icon: "fas fa-cogs",
      content: (
        <div>  
           <ProductTypeWizard/>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="page-header">
        <h4 className="page-title">My Library</h4>
      </div>

      <div className="page-content">
        <div className="card" style={{ width: "70%", margin: "0 auto" }}>
          <div className="card-body pt-0 overflow-visible">
            <Tabs tabs={settingsTabs} />
          </div>

          <div className="card-footer">
            <button
              className="btn btn-secondary-text mr-2"
              onClick={() => navigate("/my-library")}
            >
              Cancel
            </button>
            <button className="btn btn-primary">Save Changes</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddOrEditSetting;
