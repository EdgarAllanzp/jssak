const fs = require('fs');
const Comments = require('parse-comments');

const comments = new Comments();

comments.on('rawNode', function(node) {
  console.log('rawNode');
  console.log(node);
});

comments.on('token', function(tok) {
  console.log('token');
  console.log(tok);
  if (tok.example.code && !tok.example.lang) {
    tok.example.lang = 'js';
  }
});

const ast = comments.parse(fs.readFileSync('./src/array/is-sorted.js', 'utf8'));
// console.log(ast);
// console.log(ast[0].tags[1]);
console.log(ast[0].examples[0]);