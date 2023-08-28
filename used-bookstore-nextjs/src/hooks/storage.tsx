import { useState } from "react";

interface SetValueProps {
  value: unknown;
}

const useLocalStorage = (key: string, initialValue: string | null) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: SetValueProps) => {
    try {
      const valueToStore = value || storedValue;
      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  const removeValue = () => {
    try {
      setStoredValue(null);
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue, removeValue];
};

export { useLocalStorage };
