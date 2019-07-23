const Sequelize = require('sequelize');
const {mysql} = require('../config/conn');

const Project = mysql.define ('projects',{
    pid:{
        type:Sequelize.INTEGER,
        allowNull:false,
         autoIncrement: true,
        primaryKey:true
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    language:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

Project.sync({force:false})
    .then((res)=>{
        console.log(" Table created successfully");
    })
    .catch((err)=>{
        console.log("Table Creation failed !!",err);
    });

module.exports = Project;