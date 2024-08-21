import { body } from 'express-validator';

const validateMessage = [
  body('title').trim().isLength({ min: 1, max: 64 }).withMessage(`Title must be between 1 and 64 characters.`),
  body('body')
    .optional()
    .trim()
    .isLength({ max: 2000 })
    .withMessage('Message body must be no more than 2000 characters.')
    .custom((value) => {
      return value.split(/\r\n|\r|\n/).length <= 32;
    })
    .withMessage('Message body must be nore more than 32 lines.'),
];

export { validateMessage };
