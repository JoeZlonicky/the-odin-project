import './global.css';
import './style/header.css';
import './style/search.css';
import './style/content.css';

import * as apiKeyUtility from './scripts/apiKey.js';

let apiKey = undefined;
let waitingForKey = true;

const getApiKey = async () => {
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

const getNewApiKey = async () => {
  waitingForKey = true;
  let newKey = await apiKeyUtility.promptUserForValidKey(apiKey !== undefined ? apiKey : '');
  waitingForKey = false;

  if (newKey !== null) {
    apiKey = newKey;
    apiKeyUtility.saveToStorage(apiKey);
  }
};

//getApiKey();

const editApiKeyButton = document.querySelector('#edit-api-key-button');
editApiKeyButton.addEventListener('click', () => {
  if (waitingForKey) return;

  getNewApiKey();
});
