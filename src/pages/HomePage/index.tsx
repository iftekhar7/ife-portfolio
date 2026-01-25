import React, { Suspense } from "react";
import Header from "../../components/Header";
import {
  DEFAULT_DARK_THEME,
  DEFAULT_THEME,
  handleApplyTheme,
  useTheme,
} from "../../components/ThemeProvider";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Route, Routes, useLocation } from "react-router-dom";
import { RouteList } from "../../Route/route"; 
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";

const Login = React.lazy(() => import("../../pages/Login")); 

function HomePage() {
  const path = useLocation(); 
  const { updateTheme } = useTheme();
  const [currentMode] = useLocalStorage("theme", "");

  React.useEffect(() => {
    const updatedTheme = {
      palette: DEFAULT_THEME,
      darkPalette: DEFAULT_DARK_THEME,
      font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
      iconStyle: "fa-regular",
    };

    updateTheme((prev: any) => ({
      ...prev,
      ...updatedTheme,
      mode: currentMode || "light",
    }));
    handleApplyTheme(document.body, updatedTheme, currentMode || "light");
  }, [currentMode, updateTheme]);

  return (
    <>
      {path.pathname === "/login" ? (
        <Routes>
          <Route
            key="login"
            path="/login"
            element={
              <Suspense fallback={<Loader height="100vh" />}>
                <Login />
              </Suspense>
            }
          />
        </Routes>
      ) : (
        <main className="content-wrapper">
          <Header /> 
          <section className="content-body">
            <Routes>
              {RouteList?.map((route) => {
                return (
                  <Route
                    key={route?.id}
                    path={route?.path}
                    element={route?.element()}
                  />
                );
              })}
            </Routes>
          </section>
           <Footer />
        </main>
      )}
    </>
  );
}

export default HomePage;
