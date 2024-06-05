const API_STORE_KEY = 'API_KEY';
const IS_METRIC_STORE_KEY = 'IS_METRIC';
const LAST_QUERY_RESULT_STORE_KEY = 'LAST_QUERY_RESULT';

const saveApiKey = (key) => {
  localStorage.setItem(API_STORE_KEY, key);
};

const saveIsMetric = (isMetric) => {
  localStorage.setItem(IS_METRIC_STORE_KEY, isMetric);
};

const saveLastQueryResult = (lastQueryResult) => {
  const asString = JSON.stringify(lastQueryResult);
  localStorage.setItem(LAST_QUERY_RESULT_STORE_KEY, asString);
};

const getApiKey = () => {
  return localStorage.getItem(API_STORE_KEY);
};

const getIsMetric = () => {
  const asString = localStorage.getItem(IS_METRIC_STORE_KEY);
  if (asString === 'true') return true;
  if (asString === 'false') return false;
  return null;
};

const getLastQueryResult = () => {
  const asString = localStorage.getItem(LAST_QUERY_RESULT_STORE_KEY);
  if (asString === null) return null;

  return JSON.parse(asString);
};

export { saveApiKey, saveIsMetric, saveLastQueryResult, getApiKey, getIsMetric, getLastQueryResult };
