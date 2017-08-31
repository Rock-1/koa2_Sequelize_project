const router = require('koa-router')()
var studentMeetingController = require('../controller/studentMeetingController')
var status = require('../util/resTemplate') 

router.prefix('/studentMeeting');

/**
 * 添加预约课程
 */
router.post('/addStudentMeeting',async (ctx, next) => {
    try{
      var data = await studentMeetingController.addStudentMeeting(ctx, next);
      status.successTemp(ctx,200,data);
    }catch(e){
      console.log(e)
      status.catchError(ctx,400,e.message);    
    } 
  })


  module.exports = router;