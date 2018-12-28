const fs = require('fs');
const Comments = require('parse-comments');

function extractComment(path) {
  const comment = {};
  const commentsInfo = new Comments();
  const ast = commentsInfo.parse(fs.readFileSync(path, 'utf-8'))[0];
  const [syntax, ...params] = ast.tags;
  const returns = params.pop();

  comment.params = params.map(param => {
    return {
      name: param.name,
      type: param.type.name,
      description: param.description
    };
  });
  comment.syntax = syntax.description;
  comment.description = ast.description;
  comment.returns = {
    type: returns.type.name,
    description: returns.description
  };
  comment.examples = ast.examples[0].raw;

  return comment;
}

// let comment = extractComment('./src/array/is-sorted.js');

// console.log(comment);