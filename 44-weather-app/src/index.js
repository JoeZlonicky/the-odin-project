import './global.css';
import './style/header.css';
import './style/search.css';
import './style/content.css';

import * as saveLoad from './scripts/saveLoad.js';
import * as apiKeyUtility from './scripts/apiKey.js';
import { query as apiQuery } from './scripts/api.js';
import displayData from './scripts/displayData.js';

let apiKey = null;
let currentQuery = null;
let waitingForKey = true;
let isMetric = true;

const updateApiKey = async () => {
  apiKey = saveLoad.getApiKey();
  if (apiKey === null || !apiKeyUtility.verify(apiKey)) {
    waitingForKey = true;
    apiKey = await apiKeyUtility.promptUserForValidKey();
  }
  waitingForKey = false;

  if (apiKey !== null) {
    saveLoad.saveApiKey(apiKey);
  }
};

const getNewApiKeyFromUser = async () => {
  waitingForKey = true;
  let newKey = await apiKeyUtility.promptUserForValidKey(apiKey !== null ? apiKey : '');
  waitingForKey = false;

  if (newKey !== null) {
    apiKey = newKey;
    saveLoad.saveApiKey(apiKey);
  }
};

const searchMessage = document.querySelector('.search-message');

const search = async (location) => {
  if (waitingForKey || location === '') return;

  searchMessage.textContent = 'Searching...';

  const searchQuery = await apiQuery(apiKey, location);
  if (searchQuery === null) {
    searchMessage.textContent = 'Search failed :(';
    return;
  }

  searchMessage.textContent = '';

  currentQuery = searchQuery;
  displayData(currentQuery, isMetric);
  saveLoad.saveLastQueryResult(currentQuery);
};

const editApiKeyButton = document.querySelector('#edit-api-key-button');
editApiKeyButton.addEventListener('click', () => {
  if (waitingForKey) return;

  getNewApiKeyFromUser();
});

const metricToggles = document.querySelectorAll('.metric-unit-button');
const imperialToggles = document.querySelectorAll('.imperial-unit-button');

const swapToMetric = () => {
  isMetric = true;
  metricToggles.forEach((metricButton) => metricButton.classList.add('active'));
  imperialToggles.forEach((imperialButton) => imperialButton.classList.remove('active'));

  saveLoad.saveIsMetric(isMetric);

  if (currentQuery !== null) {
    displayData(currentQuery, isMetric);
  }
};

const swapToImperial = () => {
  isMetric = false;
  imperialToggles.forEach((imperialButton) => imperialButton.classList.add('active'));
  metricToggles.forEach((metricButton) => metricButton.classList.remove('active'));

  saveLoad.saveIsMetric(isMetric);

  if (currentQuery !== null) {
    displayData(currentQuery, isMetric);
  }
};

metricToggles.forEach((button) => {
  button.addEventListener('click', () => {
    if (isMetric) return;

    swapToMetric();
  });
});

imperialToggles.forEach((button) => {
  button.addEventListener('click', () => {
    if (!isMetric) return;

    swapToImperial();
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

const savedIsMetric = saveLoad.getIsMetric();
if (savedIsMetric === false) {
  swapToImperial();
}

const savedLastQuery = saveLoad.getLastQueryResult();
if (savedLastQuery != null) {
  currentQuery = savedLastQuery;
  displayData(currentQuery, isMetric);
}

const setup = async () => {
  await updateApiKey();
  if (apiKey === null) {
    return;
  }

  if (currentQuery !== null) return;

  const initialQuery = await apiQuery(apiKey, 'Victoria BC');
  if (initialQuery === null) {
    return;
  }

  currentQuery = initialQuery;
  displayData(currentQuery, isMetric);
};

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => setup(), 20); // Delay enough that prompt won't interrupt page rendering
});
