const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const sockets = [];
const messagesHistory = [];

const sendMessage = message => {
  sockets.forEach(chatterConnection =>
    chatterConnection.emit('message', message)
  );
};

io.on('connection', socket => {
  sockets.push(socket);
  socket.emit('messagesHistory', messagesHistory);
  const chatterName = `chatter${Math.floor(Math.random() * Math.floor(100))}`;

  socket.on('messageSend', message => {
    const messageToDisplay = { message, chatterName };
    messagesHistory.push(messageToDisplay);
    sendMessage(messageToDisplay);
  });
});

server.listen(4000, () => console.log(`Listening on port 4000`));
