const path = require('path');
const fs = require('fs');

const folderName = 'Foldername';
const folderPath = path.join(__dirname, folderName);

fs.readdir(folderPath, (err, files) => {
  if (err) {
    return console.log('Unable to read folder: ' + err);
  }
  files.forEach(file => {
    console.log(file);
  });
});
