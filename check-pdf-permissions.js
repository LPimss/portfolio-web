import fs from 'fs';

const pdfFilePath = 'C:/Users/PimsCleanv1/Desktop/portfolio/porftolio/doc/preuve_sauvegarde_competence.pdf';

try {
  fs.accessSync(pdfFilePath, fs.constants.R_OK);
  console.log('File is readable.');
} catch (error) {
  console.error('File is not readable:', error.message);
}