var Sequelize = require('Sequelize');
var sequelize = new Sequelize('cl59-gamingibu','cl59-gamingibu','yE9hB!h6H',{
    host: '176.32.230.47',
    dialect: 'mysql',
    pool:{
        max: 5,
        min: 0,
        idle: 10000
    }
});

sequelize.authenticate().then((err)=>{
    console.log('Connetion has been established successfully.');
}).catch(err=>{
    console.log('Unable to connecto to the database:',err);
});

module.exports = sequelize;