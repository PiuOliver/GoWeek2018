const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
mongoose.connect('mongodb://goweek:84033291Gabriel@ds153593.mlab.com:53593/goweek_gabriel', {
    useNewUrlParser: true
});
app.use(cors());
app.use((request, response, next) => {
    request.io = io;
    return next();
});
app.use(express.json());
app.use(require('./router'))

server.listen(3000, () => {
    console.log('Server started on port 3000')
})
