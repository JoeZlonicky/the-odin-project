import bcrypt from 'bcryptjs';

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

export { hashPassword };
