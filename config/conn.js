const Sequelize = require('sequelize');
const Operation = Sequelize.Op;

exports.mysql = new Sequelize('db_graphql','root','',{
    host:'localhost', //192.168.0.102
    port:3306,
    dialect:'mysql',
    operatorsAliases:Operation
});

if(exports.mysql){
    console.log("Connected !")
}

