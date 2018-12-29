const fs = require('fs');
const path = require('path');
const Comments = require('parse-comments');
const _ = require('../');

const sourcePath = './src';

let header = `---
sidebar: auto
---

# Introduction

**JavaScript Swiss Army Knife** is a **slight** and **elegant** utility library for modern JavaScript.
`;

function extractComment(path) {
  console.log(`\nExtracting ${path}...\n`);
  const comment = {};
  const commentsInfo = new Comments();
  const ast = commentsInfo.parse(fs.readFileSync(path, 'utf-8'))[0];
  if (!ast) {
    return;
  }

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

const dirs = fs.readdirSync(sourcePath).filter(filename => {
  const dir = path.join(sourcePath, filename);
  return fs.statSync(dir).isDirectory();
});

let document = dirs.reduce((doc, cat) => {
  const category = `\n## ${_.capitalize(cat)}\n`;
  const categoryPath = path.join(sourcePath, cat);
  const files = fs.readdirSync(categoryPath).filter(file => file !== 'index.js');
  const segment = files.map(file => {
    const method = _.camelCase(file.replace('.js', ''));
    const filePath = path.join(categoryPath, file);
    const comment = extractComment(filePath);
    if (!comment) {
      return `
### ${method}

> _TODO_
      `;
    }

    const args = comment.params.map((param, index) => {
      return `${index + 1}. \`${param.name}\` *(${param.type})*: ${param.description}`;
    }).join('\n');
    return `
### ${method}

\`\`\`${comment.syntax}\`\`\`

${comment.description}

#### Arguments

${args}

#### Returns

*(${comment.returns.type})*: ${comment.returns.description}

#### Example

${comment.examples}
    `;
  }).join('\n');
  return doc + category + segment;
}, header);

const docPath = path.join(__dirname, './document/README.md');

fs.writeFileSync(docPath, document);

console.log('Finished');
