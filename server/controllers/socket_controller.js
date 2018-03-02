const socket = require('socket.io');
const messages = [];

module.exports =  ( socket ) => {
    console.log(socket.id);

    // A user joins the chat room
    socket.join('chat room');
    console.log('A user joined chat');
    
    // listens for the message then sends the new list of messages
    socket.on('send_message', (message) => {
        messages.push(message);
        io.in('chat room').emit('get_message', message);  // Sends to the the new list of messages
    })
    
    // The user gets the list of messages
    socket.on('join', () => {
        socket.emit('get_message', messages);
    })
    
    // The user disconnects from the chat
    socket.on('disconnect', () => {
        console.log('A user disconnected from chat');
    })
}