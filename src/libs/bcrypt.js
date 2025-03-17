const bcrypt = require('bcrypt');

async function encryptPasswords(passwords) {
  const saltRounds = 10;
  const encryptedPasswords = [];

  for (const password of passwords) {
    const start = Date.now();
    const hash = await bcrypt.hash(password, saltRounds);
    const end = Date.now();
    console.log(`Password encrypted in ${end - start} ms`);
    encryptedPasswords.push(hash);
  }

  return encryptedPasswords;
}

module.exports = { encryptPasswords };