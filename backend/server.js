const express = require('express');
const app = express();
const testRouter = require('./router/testRouter');
const mainRouter = require('./router/mainRouter');

app.use('/',mainRouter);
app.use('/test',testRouter);

app.listen(3000,()=>{

});