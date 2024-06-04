import './index.css';

const apiKeyInput = document.querySelector('#api-key-input');
const searchTermInput = document.querySelector('#search-term-input');
const statusMessage = document.querySelector('#status-message');

const img = document.querySelector('#gif');

const newImageButtons = document.querySelectorAll('.new-image-button');
newImageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    newImage();
  });
});

const getGIF = (searchTerm) => {
  return new Promise((resolve, reject) => {
    if (searchTerm === '') {
      reject('Please provide a search term!');
      return;
    }
    let apiKey = apiKeyInput.value;
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchTerm}`, {
      mode: 'cors',
    })
      .then(
        (response) => {
          return response.json();
        },
        () => {
          reject('Failed to fetch!');
        },
      )
      .then((response) => {
        let url = response?.data?.images?.original?.url;
        if (url) {
          resolve(url);
        } else if (response?.meta?.status === 401) {
          reject('Unauthorized search, double-check your API key!');
        } else {
          reject('No image found!');
        }
      });
  });
};

const newImage = () => {
  statusMessage.textContent = 'Fetching...';
  statusMessage.classList.remove('error');
  getGIF(searchTermInput.value).then(
    (result) => {
      img.src = result;
      statusMessage.textContent = '';
    },
    (reason) => {
      statusMessage.textContent = reason;
      statusMessage.classList.add('error');
    },
  );
};
