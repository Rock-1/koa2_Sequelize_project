const router = require('koa-router')()
var userContoller = require('../controller/userController')
var status = require('../util/resTemplate') 

router.prefix('/users')


/**
 * 添加用户
 */
router.post('/addUser',async (ctx, next) => {
  try{
    var data = await userContoller.addUser(ctx, next);
    status.successTemp(ctx,200,data);
  }catch(e){
    console.log(e)
    status.catchError(ctx,400,e.message);    
  } 
})


/**
 * 用户登录
 */
router.post('/login',async(ctx, next)=>{
  try{
    var data = await userContoller.login(ctx, next);  
    status.successTemp(ctx,200,data);
  }catch(e){
    status.catchError(ctx,400,e.message);    
  } 
})

router.get('/authLogin.html', async function(ctx, next){
	let type =  ctx.request.query.type;
	if(type == "GITHUB"){
		await ctx.redirect(`https://github.com/login/oauth/authorize?client_id=${config.github.client_id}&state=${Date.now()}&redirect_uri=${config.host}${config.github.redirect_url}`);
	}else{
		await ctx.redirect(`https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=${config.qq.appId}&state=${Date.now()}&redirect_uri=${config.host}${h}`);
	}
});

/**
 *获取用户列表
 */
router.post('/getUser',async(ctx, next)=>{
  try{
    var data = await userContoller.getStu(ctx, next);  
    status.successTemp(ctx,200,data);
  }catch(e){
    status.catchError(ctx,400,e.message);    
  } 
})

/**
 * 修改用户信息
 */
router.put('/updateUserByUserId/:userId',async(ctx, next)=>{
  try{
    let updateBackData = await userContoller.updateUserByUserId(ctx, next);  
    status.successTemp(ctx,200,updateBackData);
  }catch(e){
    console.log(e)
    status.catchError(ctx,400,e.message);    
  } 
})

/**
 * 重置密码
 */
router.put('/resetPasswordByUserId/:userId',async(ctx, next)=>{
  try{
    let updateBackData = await userContoller.resetPasswordByUserId(ctx, next);  
    status.successTemp(ctx,200,updateBackData);
  }catch(e){
    console.log(e)
    status.catchError(ctx,400,e.message);    
  } 
})


/**
 * 删除用户
 */
router.delete('/delUserByUserId/:userId',async(ctx, next)=>{
  try{
    let delData = await userContoller.delUserByUserId(ctx, next); 
    status.successTemp(ctx,200,delData);
  }catch(e){
    console.log(e)
    status.catchError(ctx,400,e.message);    
  } 
})

/**
 * 根据手机号验证码修改密码
 */
router.put('/updatePwByTelphone',async(ctx, next)=>{
  try{
    let delData = await userContoller.updatePwByTelphone(ctx, next); 
    status.successTemp(ctx,200,delData);
  }catch(e){
    console.log(e)
    status.catchError(ctx,400,e.message);    
  } 
})





module.exports = router
