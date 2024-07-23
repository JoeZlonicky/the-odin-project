import { v4 as uuid } from 'uuid';

const DATA_KEY = 'DATA';

// Expects array of product objects
function saveData(data) {
  localStorage.setItem(DATA_KEY, JSON.stringify(data));
}

// Returns array of products objects or null
function loadData() {
  const dataString = localStorage.getItem(DATA_KEY);
  if (dataString === null) return null;

  const data = JSON.parse(dataString);
  data.forEach((obj) => {
    obj.id = uuid(); // Don't use stale id's
  });

  return data;
}

export { saveData, loadData };
