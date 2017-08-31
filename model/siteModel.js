var  sequelize = require('../config');
var Sequelize = require('sequelize');
const uuid = require('../util/UuidUtil')


var  site = sequelize.define('3m_site', {
    id: {
        type: Sequelize.STRING(32),
        defaultValue:uuid.db32(),
        allowNull: false,
        unique: true,
        primaryKey: true,
        field: "id"
    },
    siteId: {
        type:Sequelize.STRING(32),
        field: "siteid"
    },
    siteKey: {
        type:Sequelize.STRING(128),
        field: "site_key"
    },
    startDate:{
        type:Sequelize.TEXT(0),
        field: "startdate"
    },
    endDate:{
        type:Sequelize.STRING(1024),
        field: "enddate"
    },
    aseKey:{
        type:Sequelize.STRING(128),
        field: "ase_key"
    },
    mcuList:{
        type:Sequelize.INTEGER(1),
        field: "mcu_list"
    },
    msList:{
        type:Sequelize.INTEGER(1),
        field: "ms_list"
    },
    rsList:{
        type:Sequelize.INTEGER(1),
        field: "rs_list"
    },
    docList:{
        type:Sequelize.STRING(32),
        field: "doc_list"
    }
}, {
        timestamps: false,
        freezeTableName: true
    });

module.exports = site;