const {Sequelize ,DataTypes} = require('sequelize');
const sequelize = require('../utils/db-connection');

const Players = sequelize.define('players', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthplace: {
        type: DataTypes.STRING,
        allowNull: false
    },
    career: {
        type: DataTypes.STRING,
        allowNull: false
    },
    matches: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fifties: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    centuries: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    wickets: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    average: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Players;
