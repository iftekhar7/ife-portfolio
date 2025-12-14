import React, { createContext, useContext, useState } from "react";

export const DEFAULT_THEME = {
  primary: "27, 76, 150",
  primaryLight: "233, 242, 255",
  primaryDark: "22, 61, 120",
  primaryDarker: "21, 74, 130",

  neutral: {
    900: "26, 26, 26",
    800: "45, 45, 45",
    700: "73, 80, 87",
    600: "108, 117, 125",
    500: "173, 181, 189",
    400: "206, 212, 218",
    300: "222, 226, 230",
    200: "233, 236, 239",
    100: "248, 249, 250",
    50: "255, 255, 255",
  },

  success: "10, 176, 80",
  successLight: "60, 199, 106",
  successDark: "8, 153, 66",

  purple: "115, 86, 177",
  purpleLight: "239, 236, 255",

  warning: "255, 193, 7",
  warningLight: "255, 205, 57",
  warningDark: "211, 158, 0",

  error: "220, 53, 69",
  errorLight: "227, 93, 106",
  errorDark: "189, 33, 48",

  info: "23, 162, 184",
  infoLight: "63, 201, 216",
  infoDark: "17, 122, 139",

  background: "255, 255, 255",
  backgroundSecondary: "248, 249, 250",
  backgroundTertiary: "233, 236, 239",
  surface: "255, 255, 255",
  overlay: "rgba(0, 0, 0, 0.4)",
};

export const DEFAULT_DARK_THEME = {
  primary: "37, 112, 192",
  primaryLight: "239, 246, 255",
  primaryDark: "28, 90, 154",
  primaryDarker: "21, 74, 130",

  neutral: {
    900: "248, 249, 250",
    800: "233, 236, 239",
    700: "206, 212, 218",
    600: "173, 181, 189",
    500: "108, 117, 125",
    400: "73, 80, 87",
    300: "52, 58, 64",
    200: "33, 37, 41",
    100: "26, 29, 35",
    50: "15, 17, 20",
  },

  success: "10, 176, 80",
  successLight: "60, 199, 106",
  successDark: "8, 153, 66",

  warning: "251, 191, 36",
  warningLight: "254, 215, 170",
  warningDark: "217, 119, 6",

  error: "248, 113, 113",
  errorLight: "252, 165, 165",
  errorDark: "220, 38, 38",

  info: "96, 165, 250",
  infoLight: "147, 197, 253",
  infoDark: "37, 99, 235",

  background: "15, 17, 20",
  backgroundSecondary: "0, 0, 0",
  backgroundTertiary: "33, 37, 41",
  surface: "26, 29, 35",
  overlay: "rgba(0, 0, 0, 0.4)",
};

// -------------------------
// CONTEXT
// -------------------------

const ThemeContext = createContext<any>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// -------------------------
// PALETTE APPLIERS
// -------------------------

const applyPalette = (element: any, palette: any) => {
  Object.entries(palette).forEach(([key, value]:any) => {
    if (typeof value === "object") { 
      Object.entries(value).forEach(([subKey, subValue]) => {
        element.style.setProperty(`--${key}-${subKey}`, subValue);
      });
    } else {
      element.style.setProperty(`--${key}`, value);
    }
  });
};

export const handleApplyTheme = (element: any, updatedTheme: any, mode: any) => {
  if (updatedTheme.palette) {
    applyPalette(
      element,
      mode === "dark" ? updatedTheme.darkPalette : updatedTheme.palette
    );
  }
  if (updatedTheme.font) {
    element.style.setProperty(`--font-family`, updatedTheme.font);
  }
};

// -------------------------
// PROVIDER
// -------------------------

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<any>({ mode: "dark" });

  return (
    <ThemeContext.Provider value={{ theme, updateTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
