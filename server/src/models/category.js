const { DataTypes, Model } = require('sequelize');
const sequelize = require('../configs/database');

class Category extends Model {}

Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Category',
        tableName: 'Category'
    },
);

module.exports = Category;