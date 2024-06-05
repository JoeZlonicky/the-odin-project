import { query as apiQuery } from './api.js';

const LOCAL_STORAGE_STORE_KEY = 'API_KEY';

// Return a valid key or null if the user cancels
const promptUserForValidKey = async (defaultValue = '') => {
  while (true) {
    const key = prompt('Please enter your WeatherAPI API key:', defaultValue);
    if (key === null) {
      return null;
    }
    if (key === '') {
      alert('A WeatherAPI API key is required to use this site.');
      continue;
    }

    const result = await verify(key);
    if (result === true) {
      return key;
    }

    alert(`An error occured: ${result}`);
  }
};

const saveToStorage = (key) => {
  localStorage.setItem(LOCAL_STORAGE_STORE_KEY, key);
};

// Returns a key or null
const getFromStorage = () => {
  return localStorage.getItem(LOCAL_STORAGE_STORE_KEY);
};

// Returns true or an error message
const verify = async (key) => {
  if (key === '') {
    return 'Empty';
  }
  const result = await apiQuery(key, 'Ottawa');
  return result !== null;
};

export { promptUserForValidKey, saveToStorage, getFromStorage, verify };
