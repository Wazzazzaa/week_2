'use strict';
const pool = require('../db');
const promisePool = pool.promise();

const getUser = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM wop_user WHERE user_id=X');
    return rows;
  }catch (e) {
    console.log('error', e.message);
  }
};

const addUser = async () => {
  try {
    const [rows] = await promisePool.query('INSERT * FROM wop_user WHERE user_id=X');
    return rows;
  }catch (e) {
    console.log('error', e.message);
  }
};


module.exports = {
  getUser,
  addUser
};