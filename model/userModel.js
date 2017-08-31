var  sequelize = require('../config');
var Sequelize = require('sequelize');
var uuid = require('../util/UuidUtil')


var  user = sequelize.define('3m_user', {
    id: {
        type: Sequelize.STRING(32),
        defaultValue:uuid.db32(),
        allowNull: false,
        unique: true,
        primaryKey: true,
        field: "id"
    },
    loginName: {
        allowNull: false,        
        type:Sequelize.STRING(100),
        field: "login_name"
    },
    IDcard: {
        allowNull: false,        
        type:Sequelize.STRING(50),
        field: "IDcard"
    },
    password: {
        allowNull: false,        
        type:Sequelize.STRING(100),
        field: "password"
    },
    salt:{
        type:Sequelize.INTEGER(2),
        field: "salt"
    },
    companyName:{
        type:Sequelize.STRING(1024),
        field: "company_name"
    },
    userName:{
        type:Sequelize.STRING(64),
        field: "user_name"
    },
    userType:{
        type:Sequelize.INTEGER(1),
        field: "user_type"
    },
    userRole:{
        type:Sequelize.INTEGER(1),
        field: "user_role"
    },
    userEmail:{
        type:Sequelize.INTEGER(1),
        field: "user_email"
    },
    userMobile:{
        type:Sequelize.STRING(32),
        field: "user_mobile"
    },
    createTime:{
        type:Sequelize.DATE,
        defaultValue:Sequelize.NOW,
        field: "create_time"
    },
    endTime:{
        type:Sequelize.DATE,
        field: "end_time"
    },
    content:{
        type:Sequelize.TEXT(1024),
        field: "content"
    },
    serialNo:{
        type:Sequelize.INTEGER(11),
        field: "serial_no"
    },
    siteId:{
        type:Sequelize.STRING(32),
        field: "site_id"
    },
    userStatus:{
        type:Sequelize.INTEGER(11),
        field: "user_status"
    },
    groupId:{
        type:Sequelize.STRING(128),
        field: "group_id"
    },
}, {
        timestamps: false,
        freezeTableName: true
    });

module.exports = user;