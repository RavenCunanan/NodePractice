const fs = require('fs');

const filePath = 'seventh-grade.txt';

fs.unlink(filePath, (err) => {
  if (err) {
    console.error('Error deleting diary file:', err);
  } else {
    console.log('Diary entry deleted');
  }
});
