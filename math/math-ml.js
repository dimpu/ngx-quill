'use strict'
const fastify = require('fastify')();
const puptex = require('puptex');
fastify.register(require('fastify-cors'), {});
fastify.register(require('fastify-formbody'))

puptex.config({
  concurrency: 2,
  mathJax: {}
});

fastify.post('/math', async (request, reply) => {
  console.log(request.body);
  const {
    format,
    formula
  } = request.body;
  await puptex.launch();
  const data = await puptex.renderMath(formula, {
    format
  });
  data.format = format;
  data.formula = formula;
  reply.code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({
      data
    });
});


const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()


// const fastify = require('fastify')({
//   http2: true
// })
// const puptex = require('puptex');

// (async () => {
//   puptex.config({
//     concurrency: 2,
//     mathJax: {}
//   });
//   await puptex.launch();
//   const data = await puptex.renderMath('E=mc^2');
//   console.log(data);
//   // data => {errors: [], svg: '<svg .../>', mml: '', widht: '', height: '', ...}
//   puptex.close();
// })();



// fastify.get('/math', async (request, reply) => {
//   return {
//     hello: 'world'
//   }
// })

// const start = async () => {
//   try {
//     await fastify.listen(3000)
//   } catch (err) {
//     fastify.log.error(err)
//     process.exit(1)
//   }
// }
// start()

// fastify.get('/', function (request, reply) {
//   reply.code(200).send({
//     hello: 'world'
//   })
// })

// fastify.listen(3000)
