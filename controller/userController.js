var userModel =  require('../model/userModel');
var saitMd5 = require('../util/saltMD5')
var status = require('../util/resTemplate') 
const userService = require('../services/userService')
const uuid = require('../util/UuidUtil')
const redis = require('../util/redis')



var userController =function (){

};

/**
 * Generate documentation output.
 *
 * @param {TAFFY} ctx 
 *                       
 * @param {object} next 
 */
userController.prototype.addUser = async(ctx, next) =>{
    try{
    var params = ctx.request.body;
    var  pw = saitMd5.md5AddSalt(params.password)    

    if(!params.loginName){
        return status.paramError('loginName');
    }else  if(!params.userEmail){
        return status.paramError('userEmail');
    }

    if(params.userRole == 2 || params.userRole == 3){
         if(!params.IDcard){
            return status.paramError('IDcard','不能为空');        
        }else if(!params.userName){
            return status.paramError('userName','不能为空');                
        }
        pw = saitMd5.md5AddSalt('123456')
        params.loginName = Math.random().toString(24).substr(9);        
    }else if(params.userRole == 4){
        if(!params.userMobile){
            return status.paramError('userMobile','不能为空');        
        }else if(!params.password){
            return status.paramError('password','不能为空');        
        }else if(params.password.length < 6){
            return status.paramError('password','不得小于6位');                
        }
    }
    let id = await uuid.db32() 

    var user = {
        id:id,
        loginName:params.loginName,
        password:pw.md5Pass,
        companyName:params.companyName,
        userName:params.userName,
        IDcard:params.IDcard,
        salt:pw.salt,
        time:params.time,
        userType:params.userType,
        userRole:params.userRole,
        userEmail:params.userEmail,
        userMobile:params.userMobile,
        content:params.content,
        endTime:new Date(params.endTime),
        groupId:params.groupId
    }
    let uData= await userService.addUser(user);
    delete uData.password;
    delete uData.salt;
    return uData;       
    }catch (e){ 
        throw new Error(e);         
    }
}


/**
 * 用户登录
 */
userController.prototype.login = async(ctx, next) =>{
    try{
    const body = ctx.request.body;
    await redis.setToken('qwe123','qwe123');
    let redisCode = await redis.getToken('qwe123')
    console.log(redisCode)
    if(false ){
        return  status.paramError('code');
    }else if(!body.loginName&&!body.userEmail){
        return status.paramError('userEmail loginName');        
    }else if(!body.password){
        return status.paramError('password');
    }

        let userData =  await userService.login(body.loginName ,body.password,body.userEmail);
        var userBack = {
            id:userData.id,
            loginName:userData.loginName,
            userType:userData.userType,
            token:userData.token,
            createTime:userData.createTime
        }
        if(!userData.code){
            return userBack;

        }else{
            return userData;
        }
    }catch (we){ 
        throw new Error(we)
    }

}

userController.prototype.getStu = async(ctx, next) =>{
    try {
    const stuType =  ctx.request.body;
    if(!stuType){
        return status.paramError('type');
    }
    let page = ctx.header.page ? Number(ctx.header.page):ctx.header.page;
    let pageno = ctx.header.pageno;
    let stu = await userService.getStu(stuType,page,pageno);
    return stu
    } catch (error) {
        throw new Error(error)
    }
}

userController.prototype.updateUserByUserId = async(ctx, next) =>{
    const userId =  ctx.params.userId;
    const updateData = ctx.request.body;
    if(!userId){
        return status.paramError('userId');
    }
    if(!updateData){
        return {code:0,msg:'修改内容不能为空'}                                      
    }
    if(updateData.id||updateData.password||updateData.salt||updateData.userType){
        return {code:3,msg:'用户id、密码、类型是不能修改的'}                                      
    }

    try {
        let stu = await userService.updateUserByUserId(userId,updateData);
        return stu
    } catch (error) {
        throw new Error(error)
    }
}

userController.prototype.delUserByUserId = async(ctx,next) => {
    const userId =  ctx.params.userId;
    if(!userId){
        return status.paramError('userId');
    }    
    try {
        let deluser = userService.delUserByUserId(userId);
        return deluser
    } catch (error) {
        throw new Error(error)        
    }
}


userController.prototype.resetPasswordByUserId = async(ctx,next) =>{
    const userId =  ctx.params.userId;
    const pw = saitMd5.md5AddSalt('123456')    
    
    if(!userId){
        return status.paramError('userId');
    } 
    try {
        let deluser = userService.resetPasswordByUserId(userId,pw);
        return deluser
    } catch (error) {
        throw new Error(error)        
    }
}

userController.prototype.updatePwByTelphone = async(ctx, next) =>{
    const code  = ctx.request.body.code;
    const telephone  = ctx.request.body.telephone; 
    const password = ctx.request.body.password;
    const pw = saitMd5.md5AddSalt(password);    
    
    let setCode = await redis.setToken(code,code)  
    let redisCode = await redis.getToken(code);
    if(code != redisCode){
        return {code:500,msg:'验证码错误'};                
    }else if(!password){
        return {code:501,msg:'密码不能为空'};                        
    }else if(!IDcard){
        return {code:502,msg:'身份证号不能为空'};                        
    }
    let updatePW = await userService.updatePwByTelphone(telephone,pw)
    return updatePW;
}

module.exports = new userController();