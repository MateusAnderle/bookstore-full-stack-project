import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface SetValueProps {
  value: unknown;
  valueToStore: any;
}

const useLocalStorage = (key: string, initialValue: string | null) => {
  const [storedValue, setStoredValue] = useState<any>(async () => {
    try {
      const item = await AsyncStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = async (value: SetValueProps) => {
    try {
      const valueToStore = value || storedValue;
      setStoredValue(valueToStore);

      await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  const removeValue = async () => {
    try {
      setStoredValue(null);
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue, removeValue];
};

export { useLocalStorage };
