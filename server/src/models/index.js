const Sequelize = require('sequelize');
const sequelize = require('../configs/database');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Category = require('./category');

const syncDatabase = async () => {
    try {
        await db.sequelize.sync({ force: true });
        console.log('Database & tables created!');
    } catch (error) {
        console.error('Unable to create database:', error);
    }
};

syncDatabase();

module.exports = db;