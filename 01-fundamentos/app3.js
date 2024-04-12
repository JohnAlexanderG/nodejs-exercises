const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const wordCount = content.split(' ').length;
const reactWordCount = content.match(/react/ig ?? []).length;

console.log('Nº de Palabras: ', wordCount)
console.log('Nº de Palabras: ', reactWordCount)