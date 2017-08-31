const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors');


const index = require('./routes/index')
const users = require('./routes/users')
const meeting = require('./routes/meeting')
const studentMeeting = require('./routes/studentMeeting')
const filterUrl = require(__dirname+'/util/filterUrl')
var tokenUtil =  require('./util/tokenUtil');
const _ = require('lodash');
var status = require('./util/resTemplate') 

// error handler
onerror(app)

// middlewares
app.use(cors());
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  try{
    const start = new Date();
    if(filterUrl.indexOf(ctx.request.url) != -1){
          await next();
    }else if(!ctx.header.token){
      status.catchError(ctx,400,'请登录');        
    }else{
      let isToken = await tokenUtil.prverifySession(ctx.header.token);
      ctx.request.userID = isToken.id;
      ctx.request.userName = isToken.userName;
      ctx.request.userRole = isToken.userRole;
      await next();      
    }
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)    
  }catch (e){
    status.catchError(ctx,400,e.message);        
  }
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(meeting.routes(), meeting.allowedMethods())
app.use(studentMeeting.routes(), studentMeeting.allowedMethods())



module.exports = app
