var Koa = require('koa');
var app = new Koa();
var router = require('koa-router')();
var fs = require('fs')
const koaBody = require('koa-body');

let readFile = (filename, cb) => {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, (err, data) => {
			if(err) reject(err);
			cb && cb(data);
			return resolve(data)
		})
	})
}

router.get('/api/home', async(ctx, next) => {
	ctx.body = {
		name: 'Guia'
	}
})

router.get('/api/homead', async(ctx, next) => {
	let ads = require('./home/ad');
	ctx.body = ads;
})

router.get('/api/homead/ads/:img', async(ctx, next) => {
	ctx.type = 'image/png'
	ctx.body = await readFile('./static/ads/'+ ctx.params.img)
})

var homeListData = require('./home/list')
router.get('/api/homelist/:city/:page', async(ctx, next) => {
	const params = ctx.params;
	const paramCity = params.city;
	const paramPage = params.page;

	ctx.body = homeListData
})

router.get('/api/homelistimg/shops/:img', async(ctx, next) => {
	// ctx.type = 'image/png';
	ctx.body = await readFile('./static/shops/' + ctx.params.img);
})

router.get('/api/search/:city/:category/:keyword/:page', async(ctx, next) => {
	const params = ctx.params
	const city = params.city
	const category = params.category
	const keyword = params.keyword
	const page = params.page

	ctx.body = homeListData
})

var infoData = require('./detail/info')
router.get('/api/detail/:id', async(ctx, next) => {
	ctx.body = infoData;
})

var commentListData = require('./detail/comment')
router.get('/api/detail/comment/:id/:page', async(ctx, next) => {
	console.log(`商店ID：${ctx.params.id}`)
	console.log(`评论页码：${ctx.params.page}`)
	ctx.body = commentListData
})

var orderListData = require('./orderlist/orderList')
router.get('/api/orderlist/:username', async(ctx, next) => {
	console.log(`当前用户：${ctx.params.username}`);
	ctx.body = orderListData
})

// post需要koa-body插件来获取post参数
router.post('/api/submitComment', koaBody(), async(ctx, next) => {
	console.log('id: ' + ctx.request.body.id)
	console.log('comment: ' + ctx.request.body.comment)
	ctx.body = {
		errno: 0,
		msg: 'ok'
	}
})

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);