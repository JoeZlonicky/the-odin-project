import './global.css';
import './style/header.css';
import './style/search.css';
import './style/content.css';

import * as apiKeyUtility from './scripts/apiKey.js';
import { query as apiQuery } from './scripts/api.js';
import displayData from './scripts/displayData.js';

let apiKey = undefined;
let waitingForKey = true;

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
  let newKey = await apiKeyUtility.promptUserForValidKey(apiKey !== undefined ? apiKey : '');
  waitingForKey = false;

  if (newKey !== null) {
    apiKey = newKey;
    apiKeyUtility.saveToStorage(apiKey);
  }
};

const editApiKeyButton = document.querySelector('#edit-api-key-button');
editApiKeyButton.addEventListener('click', () => {
  if (waitingForKey) return;

  getNewApiKeyFromUser();
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

  displayData(initialQuery, true);
})();
