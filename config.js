var Sequelize = require('sequelize');
//数据配置
var sequelize = new Sequelize('xuedianyun', 'root', "", {
    host:'localhost', 
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
})

module.exports = sequelize