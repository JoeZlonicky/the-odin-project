import './index.css';

const dropdownSetup = (dropdownElement) => {
  const trigger = dropdownElement.querySelector('.dropdown-trigger');
  const content = dropdownElement.querySelector('.dropdown-content');

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

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach((dropdown) => dropdownSetup(dropdown));
