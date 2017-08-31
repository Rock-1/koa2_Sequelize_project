const router = require('koa-router')()
var userModel =  require('../model/userModel');
var saitMd5 = require('../util/saltMD5')
var status = require('../util/resTemplate') 



router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})


router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})
router.post('/login', async (ctx, next) => {
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
