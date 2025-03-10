const fs = require('fs');

const message = 'Someday, you\'ll look back on this moment and cringe a lot...but that\'s ok!'
 
fs.writeFile('seventh-grade.txt', message, (err) => {
  if (err) {
    console.error('Error rewriting diary:', err);
  } else {
    console.log('Diary rewritten successfully!');
  }
});
