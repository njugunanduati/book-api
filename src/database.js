'use strict';
import Sequelize from 'sequelize';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Models
import book from '../models/book.js';

var db = {}
const {
    DB_TYPE, DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_PORT
} = process.env;

// const sequelize = new Sequelize(`${DB_TYPE}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`);
const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_TYPE,
    define: {
        freezeTableName: true,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    // <http://docs.sequelizejs.com/manual/tutorial/querying.html#operators>
    operatorsAliases: false,
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

let models = [
    book
];
console.log(models)

// Initialize models
models.forEach(model => {
    console.log('===', model.name);
    const seqModel = model(sequelize, Sequelize)
    db[seqModel.name] = seqModel
})

// Apply associations
Object.keys(db).forEach(key => {
    if ('associate' in db[key]) {
        db[key].associate(db)
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db;
