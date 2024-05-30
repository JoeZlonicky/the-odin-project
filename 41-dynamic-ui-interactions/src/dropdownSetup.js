import './dropdown.css';

const dropdownSetup = (dropdownElement) => {
  const trigger = dropdownElement.querySelector('.dropdown__trigger');
  const content = dropdownElement.querySelector('.dropdown__content');

  let isShowing = false;

  const updateVisibility = () => {
    if (isShowing) {
      content.classList.remove('hidden');
    } else {
      content.classList.add('hidden');
    }
  };

  trigger.addEventListener('click', () => {
    isShowing = !isShowing;
    updateVisibility();
  });

  document.addEventListener('click', (e) => {
    if (!isShowing) return;

    if (dropdownElement !== e.target && !dropdownElement.contains(e.target)) {
      isShowing = false;
      updateVisibility();
    }
  });

  updateVisibility();
};

export default dropdownSetup;
