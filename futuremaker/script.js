const csv = require('csv-parser');
const fs = require('fs');

const filename = 'reg.csv';
const columnIndices = [31, 32, 33]; // Adjust column indices as per your file (0-based index)

const counts = {};

fs.createReadStream(filename)
  .pipe(csv())
  .on('data', (row) => {
    columnIndices.forEach((index) => {
      const value = row[index];
      if (!counts[index]) {
        counts[index] = {};
      }
      if (!counts[index][value]) {
        counts[index][value] = 0;
      }
      counts[index][value]++;
    });
  })
  .on('end', () => {
    columnIndices.forEach((index) => {
      console.log(`Column ${index + 1}:`);
      const columnCounts = counts[index];
      for (const value in columnCounts) {
        if (columnCounts.hasOwnProperty(value) && columnCounts[value] > 1) {
          console.log(`${value}: ${columnCounts[value]} occurrences`);
        }
      }
      console.log('---');
    });
  });
