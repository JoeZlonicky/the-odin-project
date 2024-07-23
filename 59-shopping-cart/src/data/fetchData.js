import { v4 as uuid } from 'uuid';
import { loadData, saveData } from './dataCache';

async function fetchData() {
  // Try cached first
  let data = loadData();
  if (data) return data;

  data = [];

  const itemUrls = await fetchItemUrls();
  const itemPromises = itemUrls.map(async (url) => {
    return fetchItem(url).then((item) => item);
  });

  let items = await Promise.all(itemPromises);
  items = items.filter((item) => item.cost > 0);

  saveData(items);
  return items;
}

async function fetchItemUrls() {
  const listUrl = 'https://pokeapi.co/api/v2/item?limit=100';
  try {
    const response = await fetch(listUrl);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    const urls = json.results.map((entry) => {
      return entry.url;
    });

    return urls;
  } catch (error) {
    console.error(error.message);
  }
}

async function fetchItem(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    return {
      name: json.name,
      id: uuid(),
      img: json.sprites.default,
      cost: json.cost,
    };
  } catch (error) {
    console.error(error.message);
  }
}

export default fetchData;
