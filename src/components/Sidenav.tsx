import { useLocation, useNavigate } from "react-router";

const Sidenav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateHandler = (path: string) => () => {
    if (path === location.pathname) return;
    navigate(path);
  };

  const navigationItems = [
    {
      key: "my-library",
      path: "/my-library",
      icon: " fas fa-book",
      label: "My Library",
    },
    {
      key: "ai-insights",
      path: "/ai-insights",
      icon: " fas fa-robot",
      label: "AI Insights",
    },
    {
      key: "products",
      path: "/products",
      icon: " fas fa-wrench",
      label: "Products",
    },
  ];

  return (
    <nav className="sidenav">
      <div className="sidenav-header">
          <h5>Inspiration</h5> 
        <div className="sidenav-header-logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5332/5332306.png"
            alt="Logo"
          />
        </div>
      </div>
      <ul className="sidenav-content">
        {navigationItems.map((item) => {
          const isActive = location.pathname.includes(item.path);

          return (
            <li
              key={item.key}
              className={`sidenav-item ${isActive ? "active" : ""}`}
              onClick={navigateHandler(item.path)}
            >
              <i className={`sidenav-icon ${item.icon}`}></i>
              <span>{item.label}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidenav;
