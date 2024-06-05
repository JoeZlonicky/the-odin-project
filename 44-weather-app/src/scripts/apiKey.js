import { query as apiQuery } from './api.js';

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

    alert(`Failed to verify API key.`);
  }
};

// Returns true or an error message
const verify = async (key) => {
  if (key === '') {
    return 'Empty';
  }
  const result = await apiQuery(key, 'Ottawa');
  return result !== null;
};

export { promptUserForValidKey, verify };
