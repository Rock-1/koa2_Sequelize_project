var meetingModel =  require('../model/meetingModel');
var status = require('../util/resTemplate');
var saitMd5 = require('../util/saltMD5');
var  sequelize = require('../config');
var tokenUtil =  require('../util/tokenUtil');
var co = require('co');


function meetingService(){
}

meetingService.prototype.createMeeting = async(meetingInfo) =>{
    try {
        let backMeeting = await meetingModel.create(meetingInfo);
        return backMeeting
    } catch (error) {
        throw error
    }
}
meetingService.prototype.getMeeting = async(queryData,page = 1,pageno =12) =>{
    try {
        console.log(pageno,page,(page-1)*pageno)
        let backMeeting = await meetingModel.findAll({where:queryData,offset: (page-1)*pageno, limit: pageno});
        let count = await meetingModel.count({where:queryData})
        return {meetingInfo:backMeeting,count:count,page:page,pageno:pageno};        
    } catch (error) {
        throw error;
    }
}

meetingService.prototype.delMeeting = async(meetingId) =>{
    try {
        let Meeting = await meetingModel.findOne({where:{id:meetingId}}); 
        if(!Meeting){
            return {code:11,msg:'课堂不存在'}            
        }     
        let backMeeting = await meetingModel.destroy({where:{id:meetingId}}); 
        return backMeeting
    } catch (error) {
        throw error;        
    }
}

meetingService.prototype.updateMeeting  = async(params,meetingId) =>{
    try {
        let Meeting = await meetingModel.findOne({where:{id:meetingId}}); 
        if(!Meeting){
            return {code:11,msg:'课堂不存在'}            
        }
        let backMeeting = await meetingModel.update({where:{id:meetingId}}); 
        return backMeeting        
    } catch (error) {
        console.error(error);
        throw error
    }
}



module.exports = new meetingService();