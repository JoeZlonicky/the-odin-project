import './global.css';
import './style/header.css';
import './style/search.css';
import './style/content.css';

import * as apiKeyUtility from './scripts/apiKey.js';
import { query as apiQuery } from './scripts/api.js';
import displayData from './scripts/displayData.js';

let apiKey = null;
let currentQuery = null;
let waitingForKey = true;
let isMetric = true;

const updateApiKey = async () => {
  apiKey = apiKeyUtility.getFromStorage();
  if (apiKey === null || !apiKeyUtility.verify(apiKey)) {
    waitingForKey = true;
    apiKey = await apiKeyUtility.promptUserForValidKey();
  }
  waitingForKey = false;

  if (apiKey !== null) {
    apiKeyUtility.saveToStorage(apiKey);
  }
};

const getNewApiKeyFromUser = async () => {
  waitingForKey = true;
  let newKey = await apiKeyUtility.promptUserForValidKey(apiKey !== null ? apiKey : '');
  waitingForKey = false;

  if (newKey !== null) {
    apiKey = newKey;
    apiKeyUtility.saveToStorage(apiKey);
  }
};

const search = async (location) => {
  if (waitingForKey || location === '') return;

  const searchQuery = await apiQuery(apiKey, location);
  if (searchQuery === null) {
    return;
  }

  currentQuery = searchQuery;
  displayData(currentQuery, isMetric);
};

const editApiKeyButton = document.querySelector('#edit-api-key-button');
editApiKeyButton.addEventListener('click', () => {
  if (waitingForKey) return;

  getNewApiKeyFromUser();
});

const metricToggles = document.querySelectorAll('.metric-unit-button');
const imperialToggles = document.querySelectorAll('.imperial-unit-button');

metricToggles.forEach((button) => {
  button.addEventListener('click', () => {
    if (isMetric) return;

    isMetric = true;
    metricToggles.forEach((metricButton) => metricButton.classList.add('active'));
    imperialToggles.forEach((imperialButton) => imperialButton.classList.remove('active'));

    if (currentQuery !== null) {
      displayData(currentQuery, isMetric);
    }
  });
});

imperialToggles.forEach((button) => {
  button.addEventListener('click', () => {
    if (!isMetric) return;

    isMetric = false;
    imperialToggles.forEach((imperialButton) => imperialButton.classList.add('active'));
    metricToggles.forEach((metricButton) => metricButton.classList.remove('active'));

    if (currentQuery !== null) {
      displayData(currentQuery, isMetric);
    }
  });
});

const searchButtons = document.querySelectorAll('.search-button');
const searchInput = document.querySelector('#location-input');

searchButtons.forEach((button) => {
  button.addEventListener('click', () => {
    search(searchInput.value);
  });
});

searchInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    search(searchInput.value);
  }
});

(async () => {
  await updateApiKey();
  if (apiKey === null) {
    return;
  }

  const initialQuery = await apiQuery(apiKey, 'Victoria BC');
  if (initialQuery === null) {
    return;
  }

  currentQuery = initialQuery;
  displayData(currentQuery, isMetric);
})();
