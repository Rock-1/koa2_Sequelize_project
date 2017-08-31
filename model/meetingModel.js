var  sequelize = require('../config');
var Sequelize = require('sequelize');
const uuid = require('../util/UuidUtil')


var  user = sequelize.define('3m_meeting', {
    id: {
        type: Sequelize.STRING(32),
        defaultValue:uuid.db32(),
        allowNull: false,
        unique: true,
        primaryKey: true,
        field: "id"
    },
    meetingNumber: {
        type:Sequelize.STRING(32),
        field: "meeting_number"
    },
    meetingName: {
        type:Sequelize.STRING(128),
        field: "meeting_name"
    },
    meetingContent:{
        type:Sequelize.TEXT(0),
        field: "meeting_content"
    },
    create_user:{
        type:Sequelize.STRING(128),
        field: "create_user"
    },
    createTime:{
        type:Sequelize.DATE,
        defaultValue:Sequelize.NOW,
        field: "create_time"
    },
    beginTime:{
        type:Sequelize.DATE,
        field: "begin_time"
    },
    endTime:{
        type:Sequelize.DATE,
        field: "end_time"
    },
    inviteUser:{
        type:Sequelize.STRING(1024),
        field: "invite_user"
    },
    meetingType:{
        type:Sequelize.INTEGER(4),
        field: "meeting_type"
    },
    meetingStatus:{
        type:Sequelize.STRING(32),
        field: "meeting_status"
    },
    userIp:{
        type:Sequelize.INTEGER(11),
        field: "user_ip"
    },
    meetingKey:{
        type:Sequelize.STRING(128),
        field: "meeting_key"
    },
    hostPassword:{
        type:Sequelize.STRING(12),
        field: "host_password"
    }, 
    presenterPassword:{
        type:Sequelize.STRING(12),
        field: "presenter_password"
    }, 
    assistantPassword:{
        type:Sequelize.STRING(12),
        field: "assistant_password"
    }, 
    attendeePassword:{
        type:Sequelize.STRING(12),
        field: "attendee_password"
    }, 
    capacity:{
        type:Sequelize.INTEGER(11),
        field: "capacity"
    }, 
    topNodeId:{
        type:Sequelize.STRING(32),
        field: "top_node_id"
    }, 
    topNodeAddr:{
        type:Sequelize.STRING(128),
        field: "top_node_addr"
    }, 
    userData:{
        type:Sequelize.STRING(128),
        field: "user_data"
    }, 
    siteId:{
        type:Sequelize.STRING(32),
        field: "site_id"
    }, 
    classroomNumber:{
        type:Sequelize.STRING(128),
        field: "classroom_number"
    },
    uiLanguage:{
        type:Sequelize.INTEGER(11),
        field: "ui_language"
    },
    isPublic:{
        type:Sequelize.INTEGER(11),
        field: "is_public"
    },
    controlMode:{
        type:Sequelize.INTEGER(11),
        field: "control_mode"
    },
    micAuto:{
        type:Sequelize.INTEGER(11),
        field: "mic_auto"
    },
    hasInteraction:{
        type:Sequelize.INTEGER(11),
        field: "has_interaction"
    },
    autoRecord:{
        type:Sequelize.INTEGER(11),
        field: "auto_record"
    },
    maxVideoChannels:{
        type:Sequelize.INTEGER(11),
        field: "max_videoChannels"
    },
    maxAudioChannels:{
        type:Sequelize.INTEGER(11),
        field: "max_audioChannels"
    },
    videoQuality:{
        type:Sequelize.INTEGER(11),
        field: "video_quality"
    },
    pagenaviUserprivilege:{
        type:Sequelize.INTEGER(11),
        field: "pagenavi_Userprivilege"
    },
    markerUserprivilege:{
        type:Sequelize.INTEGER(11),
        field: "marker_Userprivilege"
    },
    chatToNormalUserprivilege:{
        type:Sequelize.INTEGER(11),
        field: "chatToNormal_Userprivilege"
    },
    chatToHostUserprivilege:{
        type:Sequelize.INTEGER(11),
        field: "chatToHost_Userprivilege"
    },
    docModule:{
        type:Sequelize.INTEGER(11),
        field: "doc_module"
    },
    screenModule:{
        type:Sequelize.INTEGER(11),
        field: "screen_module"
    },
    mediaModule:{
        type:Sequelize.INTEGER(11),
        field: "media_module"
    },
    whiteboardModule:{
        type:Sequelize.INTEGER(11),
        field: "whiteboard_module"
    },
    recordModule:{
        type:Sequelize.INTEGER(11),
        field: "record_module"
    },
    videoModule:{
        type:Sequelize.INTEGER(11),
        field: "video_module"
    },
    userListModule:{
        type:Sequelize.INTEGER(11),
        field: "userList_module"
    },
    chatModule:{
        type:Sequelize.INTEGER(11),
        field: "chat_module"
    },
    cycle:{
        type:Sequelize.INTEGER(11),
        field: "cycle"
    },
    repeatmode:{
        type:Sequelize.INTEGER(11),
        field: "repeatmode"
    },
    endmode:{
        type:Sequelize.INTEGER(11),
        field: "endmode"
    },
    finalenddate:{
        type:Sequelize.INTEGER(11),
        field: "finalenddate"
    },
    endcount:{
        type:Sequelize.INTEGER(11),
        field: "endcount"
    },
    repeatday:{
        type:Sequelize.INTEGER(11),
        field: "repeatday"
    },
    repeatweek:{
        type:Sequelize.INTEGER(11),
        field: "repeatweek"
    },
    repeatmonthday:{
        type:Sequelize.INTEGER(11),
        field: "repeatmonthday"
    },
    repeatmonthweekweek:{
        type:Sequelize.INTEGER(11),
        field: "repeatmonthweekweek"
    },
    repeatmonthweekday:{
        type:Sequelize.INTEGER(11),
        field: "repeatmonthweekday"
    },
    frequency:{
        type:Sequelize.INTEGER(11),
        field: "frequency"
    },
    monthType:{
        type:Sequelize.INTEGER(11),
        field: "month_type"
    },
    inviterRadio:{
        type:Sequelize.INTEGER(11),
        field: "inviter_radio"
    },
    aheadTime:{
        type:Sequelize.INTEGER(11),
        field: "ahead_time"
    },
    chatInterval:{
        type:Sequelize.INTEGER(11),
        field: "chat_interval"
    },
    h5Module:{
        type:Sequelize.INTEGER(11),
        field: "h5_Module"
    },
    reservationNumber:{
        type:Sequelize.INTEGER(11),
        field: "reservation_number"
    },
}, {
        timestamps: false,
        freezeTableName: true
    });

module.exports = user;