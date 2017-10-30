var userModel =  require('../model/userModel');
var siteModel =  require('../model/siteModel');
const moment = require('moment')
var saitMd5 = require('../util/saltMD5')
var status = require('../util/resTemplate') 
const meetingService = require('../services/meetingService')
const uuid = require('../util/UuidUtil')
const emailUtil = require('../util/emailUtil')
const request = require('request')
const xml2js = require('xml2js');
const requestUtil = require('../util/requestUtil')
const builder = new xml2js.Builder();  // JSON->xml
const parser = new xml2js.Parser();   //xml -> json



 function meetingController(){

};

meetingController.prototype.createMeeting = async(ctx,next)=>{
    try {
        let meetingbody = ctx.request.body;
        if(!meetingbody.presenterPassword){
            return status.paramError('meetingName');
        }else if(!meetingbody.meetingName){
            return status.paramError('meetingName','不能为空');        
        }
        let num = JSON.stringify(Math.floor(Math.random() * 99999) + 1000)
        let site = await siteModel.findOne({where:{siteId:meetingbody.siteId}})
        let authIdMd5 = site.siteKey+meetingbody.siteId+num+meetingbody.userId+meetingbody.userType+123321
        console.log(authIdMd5)
        let meeting = {
              siteId:meetingbody.siteId, //站点ID
              mtgKey:meetingbody.mtgKey ? meetingbody.mtgKey:num,//课堂序号
              mtgTitle:meetingbody.meetingName, //课堂名字
              language:2,//语言
              userId:meetingbody.userId,
              userName:meetingbody.userName,//用户名
              userType:meetingbody.userType, //用户类型用户类型：1：主持人（所有权限）2：主讲人（不能操作摄像头） 8：普通与会者32: 监课人员
              meetingType:meetingbody.meetingType ,//1、互动 2、直播；默认为1
              timestamp:123321,
              autoRecord:meetingbody.autoRecord, //是否自动录制：（1是，0否）
              interaction:meetingbody.interaction,
              meetingContent:meetingbody.meetingContent, //课堂描述
              create_user:ctx.request.userName,  //创建用户名
              duration:10,//持续时长
              presenterPassword:meetingbody.presenterPassword, //主讲人密码            
              startTime: moment(meetingbody.begin).format("YYYY-MM-DD HH:MM:SS "), //开始时间
              endTime: moment(meetingbody.endTime).format("YYYY-MM-DD HH:MM:SS"), // 结束时间
              isPublic:meetingbody.isPublic,  //是否公开课
              hostPwd:876,
            //repeatmode:meetingbody.repeatmode, //是否重复周期
              meetingType:meetingbody.meetingType, //课堂类型
              h5Module:Number( meetingbody.h5Module), // 是否支持H5
            //attendeePassword:meetingbody.attendeePassword, //学生密码
               videoModule:meetingbody.videoModule, //视频是否启用
            //chatInterval:meetingbody.chatInterval, //聊天延时时间
            //aheadTime:Number( meetingbody.aheadTime), // 提前进入课堂时间
              maxVideoChannels:meetingbody.maxVideoChannels, //最大视频路数
              maxAudioChannels:meetingbody.max_audioChannels, // 最大音频路数
              videoQuality:meetingbody.video_quality, //视频画质
            //pagenaviUserprivilege:meetingbody.pagenaviUserprivilege, //换页权限是否开启
            //markerUserprivilege:meetingbody.markerUserprivilege, // 批注权限是否开启
            //chatToNormalUserprivilege:meetingbody.chatToNormalUserprivilege, //与参会者聊天权限是否开启
            //chatToHostUserprivilege:meetingbody.chatToHostUserprivilege, //与主持人聊天权限是否开启
              docModule:meetingbody.docModule, //文档共享是否开启
              screenModule:meetingbody.screenModule, //屏幕共享是否开启
              mediaModule:meetingbody.mediaModule, //媒体共享是否开启 
              whiteboardModule:meetingbody.whiteboardModule, //白板共享是否开启
              recordModule:meetingbody.recordModule, //录制是否启用
            //chatModule:meetingbody.chatModule, //聊天模式是否启用
              authId:saitMd5.md5(authIdMd5)
        }
        
        builder.options.rootName = 'param'
        var xml =  builder.buildObject(meeting);
        console.log(xml)
        let info = await requestUtil.post('',xml);
        var jsonXml =  await requestUtil.json2xml(info);        
        console.log('json string',jsonXml)
        let backJsonMeeting ={
            code:jsonXml.result.errorCode,
            meetingUrl:jsonXml.result.url[0]+'?param='+jsonXml.result.param[0],

        }
        return backJsonMeeting;
    } catch (error) {
        throw error;
    }
}

meetingController.prototype.getMeeting = async(ctx,next) =>{
    try {
        let meetingbody = ctx.request.body;
        let page = ctx.header.page ? Number(ctx.header.page):ctx.header.page;
        let pageno = ctx.header.pageno;
        let meetingData = await meetingService.getMeeting(meetingbody,page,pageno);
        return meetingData;        
    } catch (error) {
        throw error;
    }
}

meetingController.prototype.delMeeting = async(ctx,next) =>{
    try {
        const meetingId =  ctx.params.meetingId;
        let delMeetingData = await meetingService.delMeeting(meetingId); 
        return delMeetingData       
    } catch (error) {
        throw error;
    }
}
meetingController.prototype.updateMeeting = async(ctx,next) =>{
    try {
        let params = ctx.request.body;
        const meetingId =  ctx.params.meetingId;        
        let updateMeeting = meetingService.updateMeeting(params,meetingId)
        return updateMeeting;
    } catch (error) {
        console.log(error)
        throw error
    }
}

module.exports = new meetingController()
