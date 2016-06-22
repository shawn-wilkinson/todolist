/* eslint-disable func-names */
import fs from 'fs';
import path from 'path';
const file = path.join(__dirname, '../../data/categories.json');

function Category() {

}

Category.read = function () {
  const f = fs.readFileSync(file, { encoding: 'utf8' });
  const data = f.split('\n');
  data.pop();
  return data.map(d => JSON.parse(d));
};

module.exports = Category;
