import socketIOClient from 'socket.io-client';
const socket = socketIOClient('http://localhost:4000');

const getMessage = cb => {
  socket.on('message', message => cb(message));
};

const sendMessage = message => socket.emit('messageSend', message);

const getMessagesHistory = cb => {
  socket.on('messagesHistory', messagesHistory => cb(messagesHistory));
};

export { getMessage, sendMessage, getMessagesHistory };
