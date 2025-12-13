import { useState, useEffect } from "react";

export const useLocalStorage = (key:string, initialValue:any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    const handleCustomStorageChange = (e:any) => {
      if (e.detail.key === key) {
        try {
          const newValue =
            e.detail.newValue !== null
              ? JSON.parse(e.detail.newValue)
              : initialValue;
          setStoredValue(newValue);
        } catch (error) {
          console.error(
            `Error parsing localStorage key "${key}" from custom storage event:`,
            error
          );
        }
      }
    };

    window.addEventListener("localStorageChange", handleCustomStorageChange);

    return () => {
      window.removeEventListener(
        "localStorageChange",
        handleCustomStorageChange
      );
    };
  }, [key, initialValue]);

  const setValue = (value:any) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      const stringValue = JSON.stringify(valueToStore);
      window.localStorage.setItem(key, stringValue);

      window.dispatchEvent(
        new CustomEvent("localStorageChange", {
          detail: {
            key,
            newValue: stringValue,
            oldValue: window.localStorage.getItem(key),
          },
        })
      );
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};

export const useSessionStorage = (key:any, initialValue:any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading sessionStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value:any) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting sessionStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};
