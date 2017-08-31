var userModel =  require('../model/userModel');
var status = require('../util/resTemplate');
var saitMd5 = require('../util/saltMD5');
var  sequelize = require('../config');
var tokenUtil =  require('../util/tokenUtil');
var co = require('co');
const emailUtil = require('../util/emailUtil')


function userService(){
}


userService.prototype.addUser = async(data)=>{

try{
    // var t = await sequelize.transaction()            
    var queryData = [
            {userMobile:data.userMobile},
            {loginName:data.loginName },
            {userEmail:data.userEmail }
        ]
   let oldUser = await userModel.find({where:{$or:queryData}},) 
   if(oldUser){
       return {code:400,msg:'用户已存在'}
   }
    let newUser = await userModel.create(data) 
    console.log(newUser);
    if(newUser.userRole ==3 && data.time == 1){
        let e = await emailUtil.sendMail(newUser.userEmail,'认证邮件', '您已经成为学点云网校认证老师')            
    }
    // t.commit();
    return newUser;    
 }catch (err){
     console.error(err);
    //  t.rollback();
    throw new Error(err);         
}
}

userService.prototype.login = async(loginName,pw,userEmail) => {
    try{
        let queryData = [
            {userEmail:loginName},
            {loginName:loginName}
        ];
        let User = await userModel.find({where:{$or:queryData}}) 
        console.dir(User)
        console.log(User.password, saitMd5.md5Salt(pw,User.salt))
        if(!User){
            return {code:300,msg:'用户不存在'}
        }else if(User.password != saitMd5.md5Salt(pw,User.salt)){
            return {code:300,msg:'密码不正确'}
        }
        let token = await tokenUtil.getSession(User);
        return token
     }catch (err){
         console.log(err)
         throw new Error(err);         
     }
}



userService.prototype.getStu = async(type,page = 1,pageno =10)=>{
    try {

        let sql = `SELECT
                     u.*, ug.name groupName
                    FROM
                        3m_user u
                    LEFT JOIN 3m_user_group ug ON ug.id = u.group_id`;
        let users = await userModel.findAll({where:type,offset: (page-1)*pageno, limit: pageno});
        let count = await userModel.count({where:type})        
        let User = await sequelize.query(sql);
        return {users:users,count:count,page:page,pageno:pageno};                
    } catch (error) {
        throw new Error(error);                 
    }
}

userService.prototype.resetPasswordByUserId = async(userId,pw) => {
    try{
        var t = await sequelize.transaction({  autocommit: true })        
        let User = await userModel.findOne({where:{id:userId}}) 
        if(!User){
            t.rollback();
            return {code:0,msg:'用户不存在'}
        }
        let updateUser = await userModel.update({password:pw.md5Pass,salt:pw.salt},{where:{id:userId}}); 
        t.commit();       
        return updateUser
     }catch (err){
         t.rollback();
         throw new Error(err);         
     }
}

userService.prototype.updatePwByTelphone = async(tel,pw) => {
    try{
        var t = await sequelize.transaction({  autocommit: true })        
        let User = await userModel.findOne({where:{userMobile:tel}}) 
        if(!User){
            t.rollback
            return {code:0,msg:'用户不存在'}
        }
        let updateUser = await userModel.update({password:pw.md5Pass,salt:pw.salt},{where:{userMobile:tel}}); 
        t.commit();       
        return updateUser
     }catch (err){
         t.rollback();
         throw new Error(err);         
     }
}

userService.prototype.updateUserByUserId = async(userId,data)=>{
    try {
        var t = await sequelize.transaction({  autocommit: true })
        let oldUser = await userModel.findAll({where:{id:userId}},{transaction: t});
        if(!oldUser[0]){
            t.rollback()            
            return {msg:'用户不存在'}            
        }
        if(data.loginName){
            let loginNameUser = await userModel.findAll({where:{loginName:data.loginName}},{transaction: t});
            if(loginNameUser[0]){
                t.rollback()
                return {code:1,msg:'用户名已存在'}                            
            }            
        }
        let updateUser = await userModel.update(data,{where:{id:userId}},{transaction: t});
        let updateAfterUser = await userModel.find({where:{id:userId}},{transaction: t});        
        await t.commit();
        delete updateAfterUser.password;
        delete updateAfterUser.salt
        return updateAfterUser
    } catch (error) {
        t.rollback();
        throw new Error(error);                 
    }
}

userService.prototype.delUserByUserId = async(userId) => {
    let t = await sequelize.transaction({  autocommit: true })            
    try {
        let User = await userModel.find({where:{id:userId}},{transaction: t});
        if(!User){
            t.rollback()            
            return {msg:'用户不存在'}            
        }    
        let delUser = await userModel.destroy({where:{id:userId}},{transaction: t}); 
        await t.commit();
        return delUser       
    } catch (error) {
        t.rollback();
        throw new Error(error);  
    }
       
}


module.exports = new userService();