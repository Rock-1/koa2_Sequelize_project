 var saitMd5 = require('../util/saltMD5')
 var status = require('../util/resTemplate') 
 var studentMeetingService = require('../services/studentMeetingService')
var uuid = require('../util/UuidUtil')
var emailUtil = require('../util/emailUtil')



function  studentMeetingController(){
    
}

/**
 * 添加约课关联
 */
studentMeetingController.prototype.addStudentMeeting = async(ctx, next)=>{
    try {
        var body = ctx.request.body;
        if(!body.studentId){
            return status.paramError(' studentId');        
        }else if(!body.meetingId){
            return status.paramError('meetingId');
        }
        var id32 = await uuid.db32();
        body.id = id32;
        body.status = 0;
        let studentMeetings= await studentMeetingService.addStudentMeeting(body); 
        return studentMeetings;       
    } catch (error) {
        throw error;
    }
}


module.exports = new studentMeetingController();