import { body } from 'express-validator';
import { Users } from './users.model.js';

const alphaError = 'must only contain letters.';
const alphanumericError = 'must only contains letters and numbers.';
const standardLengthError = 'must be between 1 and 32 characters.';

const validateUser = [
  body('username')
    .trim()
    .isAlphanumeric()
    .withMessage(`Username ${alphanumericError}`)
    .isLength({ min: 1, max: 32 })
    .withMessage(`Username ${standardLengthError}`)
    .custom(async (value) => {
      const user = await Users.getByUsername(value);
      if (user) throw new Error('Username already in use.');
    }),
  body('firstName')
    .trim()
    .isAlpha()
    .withMessage(`First name ${alphaError}`)
    .isLength({ min: 1, max: 32 })
    .withMessage(`First name ${standardLengthError}`),
  body('lastName')
    .trim()
    .isAlpha()
    .withMessage(`Last name ${alphaError}`)
    .isLength({ min: 1, max: 32 })
    .withMessage(`Last name ${standardLengthError}`),
  body('password').isLength({ min: 8, max: 256 }).withMessage('Password must be between 8 and 256 characters.'),
  body('confirmPassword')
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage('Passwords do not match.'),
];

export { validateUser };
