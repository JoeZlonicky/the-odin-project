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
  body('email').trim().isEmail().withMessage('Invalid email.'),
  body('age').optional({ values: 'falsy' }).isInt({ min: 18, max: 120 }).withMessage('Age must be between 18 and 120.'),
  body('bio').trim().optional().isLength({ min: 0, max: 200 }),
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

    const { firstName, lastName, email, age, bio } = req.body;
    usersStorage.addUser({ firstName, lastName, email, age: age || '', bio });
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

    const { firstName, lastName, email, age, bio } = req.body;
    usersStorage.updateUser(req.params.id, { firstName, lastName, email, age: age || '', bio });
    res.redirect('/');
  },
];

export function postDeleteUser(req, res) {
  usersStorage.deleteUser(req.params.id);
  res.redirect('/');
}

export function getUserSearch(_req, res) {
  res.render('search', {
    title: 'User Search',
  });
}

export function postUserSearch(req, res) {
  const { name, email } = req.body;
  res.redirect(`/search-results?name=${name}&email=${email}`);
}

export function getSearchResults(req, res) {
  const name = req.query.name;
  const email = req.query.email;

  let users = usersStorage.getUsers();
  users = users.filter((user) => {
    if (name) {
      const userFullName = `${user.firstName} ${user.lastName}`;
      if (!userFullName.includes(name)) return false;
    }
    if (email) {
      if (!user.email.includes(email)) return false;
    }
    return true;
  });

  res.render('searchResults', {
    title: 'Search Results',
    users: users,
  });
}
