import React, { useState } from "react"; 

const Tabs = ({ tabs }:any) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  return (
    <div className="tabs-wrapper">
      <div className="tabs">
        {tabs.map((tab:any) => { 

          return (
            <button
              key={tab.id}
              className={`tab-item ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={`tab-icon ${tab.icon}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="tab-content">
        {tabs.find((t:any) => t.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
