import fs from 'fs';

/**
 * This code simply resets the sqlite database
 */
fs.copyFile('./prisma/shelter.db.backup', './prisma/shelter.db', (err) => {
  if (err) throw err;
  console.log('Database reset');
});