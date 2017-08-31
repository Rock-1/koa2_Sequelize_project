var sutudentMeeting =  require('../model/studentMeetingModel');
var status = require('../util/resTemplate');
var saitMd5 = require('../util/saltMD5');
var  sequelize = require('../config');
var tokenUtil =  require('../util/tokenUtil');
var meetingModel =  require('../model/meetingModel');
var co = require('co');


function sutudentMeetingService(){

}

sutudentMeetingService.prototype.addStudentMeeting = async(body)=>{
    try {
        var t = await sequelize.transaction({  autocommit: true })                
        let Meeting = await meetingModel.findOne({where:{id:body.meetingId}}); 
        if(!Meeting){
            t.rollback();            
            return {code:300,msg:'课堂不存在'}            
        }
        let sm = await sutudentMeeting.create(body);
        let MeetingBack = await meetingModel.update(
            {reservationNumber:Meeting.reservationNumber+1},
            {where:{id:body.meetingId}},
            {transaction: t});
        t.commit();
        return sm;
    } catch (error) {
        t.rollback();
        throw error;
    }
}

module.exports = new sutudentMeetingService();