const { loadData } = require('./modules/dataLoader');
const { sortStrings } = require('./modules/stringSorter');
const { createDirectory, writeFile } = require('./modules/fileSystem');

async function main() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const result = await loadData(url);

  if (result.error) {
    console.error('Error loading data:', result.error);
    return;
  }

  const users = result.data;
  const names = users.map(user => user.name);
  const emails = users.map(user => user.email);

  const sortedNames = sortStrings(names);

  createDirectory('users');
  writeFile('users/names.txt', sortedNames.join('\n'));
  writeFile('users/emails.txt', emails.join('\n'));

  console.log('Data has been written to files.');
}

main();