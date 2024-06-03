const form = document.querySelector('form');

const getRespectiveErrorElement = (inputID) => {
  return form.querySelector(`label[for="${inputID}"] .error`);
};

const emailInput = document.getElementById('email');
const emailErrorMessage = getRespectiveErrorElement('email');

const countryInput = document.getElementById('country');
const countryErrorMessage = getRespectiveErrorElement('country');

const zipInput = document.getElementById('zip-code');
const zipErrorMessage = getRespectiveErrorElement('zip-code');

const passwordInput = document.getElementById('password');
const passwordErrorMessage = getRespectiveErrorElement('password');

const passwordConfirmInput = document.getElementById('password-confirm');
const passwordConfirmErrorMessage = getRespectiveErrorElement('password-confirm');

const clearErrorMessage = (errorMessage) => {
  errorMessage.textContent = '';
  errorMessage.classList.remove('active');
};

const setErrorMessage = (errorMessage, text) => {
  errorMessage.textContent = text;
  errorMessage.classList.add('active');
};

// Email
const checkEmail = () => {
  if (emailInput.validity.valid) {
    clearErrorMessage(emailErrorMessage);
    return true;
  }

  showEmailError();
  return false;
};

const showEmailError = () => {
  if (emailInput.validity.valueMissing) {
    setErrorMessage(emailErrorMessage, 'Required.');
  } else if (emailInput.validity.typeMismatch) {
    setErrorMessage(emailErrorMessage, 'Invalid email address format.');
  }
};

emailInput.addEventListener('blur', () => {
  if (emailInput.value.length > 0) {
    checkEmail();
  }
});

emailInput.addEventListener('input', () => {
  clearErrorMessage(emailErrorMessage);
});

// Country
const checkCountry = () => {
  if (countryInput.validity.valid) {
    clearErrorMessage(countryErrorMessage);
    return true;
  }

  showCountryError();
  return false;
};

const showCountryError = () => {
  if (countryInput.validity.valueMissing) {
    setErrorMessage(countryErrorMessage, 'Required.');
  }
};

countryInput.addEventListener('blur', () => {
  checkCountry();
});

countryInput.addEventListener('input', () => {
  clearErrorMessage(countryErrorMessage);
});

// Zip code
const checkZip = () => {
  if (zipInput.validity.valid) {
    clearErrorMessage(zipErrorMessage);
    return true;
  }

  showZipError();
  return false;
};

const showZipError = () => {
  if (zipInput.validity.valueMissing) {
    setErrorMessage(zipErrorMessage, 'Required.');
  } else if (zipInput.validity.patternMismatch) {
    setErrorMessage(zipErrorMessage, 'Invalid zip code format');
  }
};

zipInput.addEventListener('blur', () => {
  checkZip();
});

zipInput.addEventListener('input', () => {
  clearErrorMessage(zipErrorMessage);
});

// Password
const checkPassword = () => {
  if (passwordInput.validity.valid) {
    clearErrorMessage(passwordErrorMessage);
    return true;
  }

  showPasswordError();
  return false;
};

const showPasswordError = () => {
  if (passwordInput.validity.valueMissing) {
    setErrorMessage(passwordErrorMessage, 'Required.');
  } else if (passwordInput.validity.tooShort) {
    setErrorMessage(passwordErrorMessage, 'Password must be at least 8 characters long.');
  }
};

passwordInput.addEventListener('blur', () => {
  const isValid = checkPassword();
  if (isValid && passwordConfirmInput.value.length > 0) {
    checkPasswordConfirm();
  }
});

passwordInput.addEventListener('input', () => {
  clearErrorMessage(passwordErrorMessage);
});

// Password confirm
const checkPasswordConfirm = () => {
  if (!passwordsMatch()) {
    passwordConfirmInput.setCustomValidity('Must match your password.');
  } else {
    passwordConfirmInput.setCustomValidity('');
  }

  if (passwordConfirmInput.validity.valid) {
    clearErrorMessage(passwordConfirmErrorMessage);
    return true;
  }

  showPasswordConfirmError();
  return false;
};

const passwordsMatch = () => {
  return passwordConfirmInput.value === passwordInput.value;
};

const showPasswordConfirmError = () => {
  if (passwordConfirmInput.validity.valueMissing) {
    setErrorMessage(passwordConfirmErrorMessage, 'Required.');
  } else if (!passwordsMatch()) {
    setErrorMessage(passwordConfirmErrorMessage, 'Must match your password.');
  }
};

passwordConfirmInput.addEventListener('blur', () => {
  checkPasswordConfirm();
});

passwordConfirmInput.addEventListener('input', () => {
  clearErrorMessage(passwordConfirmErrorMessage);
});

form.addEventListener('submit', (event) => {
  let isValid = checkEmail();
  isValid = checkCountry() && isValid;
  isValid = checkZip() && isValid;
  isValid = checkPassword() && isValid;
  isValid = checkPasswordConfirm() && isValid;

  if (!isValid) {
    event.preventDefault();
    return;
  }

  alert('Submitted! High-five!');
});
