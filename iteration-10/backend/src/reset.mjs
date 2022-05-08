import fs from 'fs';

/**
 * This code simply resets the sqlite database
 */
fs.copyFile('./prisma/dev.db.backup', './prisma/dev.db', (err) => {
  if (err) throw err;
  console.log('Database reset');
});
