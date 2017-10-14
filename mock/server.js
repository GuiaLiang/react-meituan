var Koa = require('koa');
var app = new Koa();
var router = require('koa-router')();
var fs = require('fs')

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

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);