/* 'use strict';
const cats = [
  {
    id: '1',
    name: 'Frank',
    age: '6',
    weight: '5',
    owner: '1',
    filename: 'http://placekitten.com/400/300',
  },
  {
    id: '2',
    name: 'James',
    age: '4',
    weight: '11',
    owner: '2',
    filename: 'http://placekitten.com/400/302',
  },
];

module.exports = {
  cats,
};
*/

'use strict';
const pool = require('../db');
const promisePool = pool.promise();

const getCat = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM wop_cat WHERE cat_id=X');
    return rows;
  }catch (e) {
    console.log('error', e.message);
  }
};
const updateCat = async () => {
  try {
    const [rows] = await promisePool.query('UPDATE * FROM wop_cat WHERE cat_id=X');
    return rows;
  }catch (e) {
    console.log('error', e.message);
  }
};
const deleteCat = async () => {
  try {
    const [rows] = await promisePool.query('DELETE * FROM wop_cat WHERE cat_id=X');
    return rows;
  }catch (e) {
    console.log('error', e.message);
  }
};

module.exports = {
  updateCat,
  getCat,
  deleteCat,
};