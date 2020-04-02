import React, { useState, useEffect } from 'React'

const useLocalStorage = (initialState, key) => {
  const get = () => {
    const storage = localStorage.getItem(key);
    if (storage) return JSON.parse(storage)[value];
    return initialState;
  };

  const [value, setValue] = useState(get());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }))
  }, [value]);

  return [value, setValue];
}
