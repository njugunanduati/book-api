'use strict';

export default function Book (sequelize, DataTypes) {
	return sequelize.define('books', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: 'books',
        timestamps: false
    });
};
        