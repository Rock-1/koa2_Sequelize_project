var  sequelize = require('../config');
var Sequelize = require('sequelize');
const uuid = require('../util/UuidUtil')

var  studentMeeting = sequelize.define('3m_student_meeting', {
    id: {
        type: Sequelize.STRING(32),
        defaultValue:uuid.db32(),
        allowNull: false,
        unique: true,
        primaryKey: true,
        field: "id"
    },
    studentId: {
        allowNull: false,        
        type:Sequelize.STRING(32),
        field: "student_id"
    },
    meetingId: {
        allowNull: false,        
        type:Sequelize.STRING(32),
        field: "meeting_id"
    },
    status: {
        allowNull: false,        
        type:Sequelize.STRING(32),
        field: "status"
    }
},{
    timestamps: false,
    freezeTableName: true
});    
module.exports = studentMeeting;