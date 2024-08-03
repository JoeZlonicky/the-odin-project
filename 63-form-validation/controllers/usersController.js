import { body, validationResult } from 'express-validator';
import usersStorage from '../storages/usersStorage.js';

const alphaErr = 'must only contain letters.';
const lengthErr = 'must be between 1 and 10 characters.';

const validateUser = [
  body('firstName')
    .trim()
    .isAlpha()
    .withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`First name ${lengthErr}`),
  body('lastName')
    .trim()
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Last name ${lengthErr}`),
];

export function getUsersList(_req, res) {
  res.render('index', {
    title: 'User List',
    users: usersStorage.getUsers(),
  });
}

export function getCreateUser(_req, res) {
  res.render('createUser', {
    title: 'Create User',
  });
}

export function getUpdateUser(req, res) {
  const user = usersStorage.getUser(req.params.id);
  res.render('updateUser', {
    title: 'Update User',
    user: user,
  });
}

export const postNewUser = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render('createUser', {
        title: 'Create User',
        errors: errors.array(),
      });
    }

    const { firstName, lastName } = req.body;
    usersStorage.addUser({ firstName, lastName });
    res.redirect('/');
  },
];

export const postUserUpdate = [
  validateUser,
  (req, res) => {
    const user = usersStorage.getUser(req.params.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render('updateUser', {
        title: 'Update User',
        user: user,
        errors: errors.array(),
      });
    }

    const { firstName, lastName } = req.body;
    usersStorage.updateUser(req.params.id, { firstName, lastName });
    res.redirect('/');
  },
];

export function postDeleteUser(req, res) {
  usersStorage.deleteUser(req.params.id);
  res.redirect('/');
}
