const router = require('koa-router')()
var meetingContoller = require('../controller/meetingController')
var status = require('../util/resTemplate') 


router.prefix('/meeting')


router.post('/createMeeting', async (ctx, next) => {
    try{
        var data = await meetingContoller.createMeeting(ctx, next);
        status.successTemp(ctx,200,data);
      }catch(e){
          console.error(e)
        status.catchError(ctx,400,e.message);    
      } 
  })

  router.post('/getMeeting', async (ctx, next) => {
    try{
        var data = await meetingContoller.getMeeting(ctx, next);
        status.successTemp(ctx,200,data);
      }catch(e){
        status.catchError(ctx,400,e.message);    
      } 
  });
  router.delete('/delMeeting/:meetingId', async (ctx, next) => {
    try{
        var data = await meetingContoller.delMeeting(ctx, next);
        status.successTemp(ctx,200,data);
      }catch(e){
        status.catchError(ctx,400,e.message);    
      } 
  })

  router.put('/updateMeeting/:meetingId', async (ctx, next) => {
    try{
        var data = await meetingContoller.updateMeeting(ctx, next);
        status.successTemp(ctx,200,data);
      }catch(e){
        status.catchError(ctx,400,e.message);    
      } 
  })


  module.exports = router
  